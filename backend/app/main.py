from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.core.config import settings

def get_application() -> FastAPI:
    _app = FastAPI(
        title=settings.PROJECT_NAME,
        openapi_url=f"{settings.API_V1_STR}/openapi.json"
    )

    _app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    Path(settings.UPLOAD_DIR).mkdir(parents=True, exist_ok=True)
    _app.mount(f"{settings.API_V1_STR}/media", StaticFiles(directory=settings.UPLOAD_DIR), name="media")

    @_app.get("/")
    async def root():
        return {"message": f"Welcome to {settings.PROJECT_NAME} API"}

    @_app.get("/health")
    async def health_check():
        return {"status": "healthy"}

    # Include routers
    from app.api.api_v1.api import api_router
    _app.include_router(api_router, prefix=settings.API_V1_STR)

    return _app

app = get_application()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
