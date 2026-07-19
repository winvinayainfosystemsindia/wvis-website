"""Local-disk file upload storage for admin-uploaded content (newsletter covers/PDFs)."""
import uuid
from pathlib import Path
from typing import Iterable

from fastapi import HTTPException, UploadFile, status

from app.core.config import settings


def _upload_root() -> Path:
    root = Path(settings.UPLOAD_DIR)
    root.mkdir(parents=True, exist_ok=True)
    return root


async def save_upload(file: UploadFile, subdir: str, allowed_exts: Iterable[str]) -> str:
    """Validate, persist an UploadFile under UPLOAD_DIR/subdir, and return its public URL path.

    The stored filename is always a fresh uuid4 — the client's original filename is never
    trusted (avoids path traversal / overwrite of unrelated files).
    """
    ext = Path(file.filename or "").suffix.lower()
    if ext not in allowed_exts:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Unsupported file type '{ext or 'unknown'}'. Allowed: {', '.join(sorted(allowed_exts))}",
        )

    contents = await file.read()
    if len(contents) > settings.MAX_UPLOAD_SIZE:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"File exceeds the {settings.MAX_UPLOAD_SIZE // (1024 * 1024)}MB upload limit.",
        )

    target_dir = _upload_root() / subdir
    target_dir.mkdir(parents=True, exist_ok=True)
    filename = f"{uuid.uuid4().hex}{ext}"
    (target_dir / filename).write_bytes(contents)

    return f"{settings.API_V1_STR}/media/{subdir}/{filename}"


def delete_upload(public_path: str | None) -> None:
    """Best-effort removal of a previously stored file, given the public URL path returned by save_upload."""
    if not public_path:
        return
    prefix = f"{settings.API_V1_STR}/media/"
    if not public_path.startswith(prefix):
        return
    relative = public_path[len(prefix):]
    target = _upload_root() / relative
    try:
        if target.is_file():
            target.unlink()
    except OSError:
        pass
