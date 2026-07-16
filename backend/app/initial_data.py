import asyncio
import logging
from sqlalchemy import select
from app.core.database import AsyncSessionLocal, engine
from app.models.user import User, UserRole
from app.core.security import get_password_hash
from app.core.config import settings

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

async def create_first_user() -> None:
    async with AsyncSessionLocal() as db:
        # Check if users already exist
        result = await db.execute(select(User).limit(1))
        user = result.scalars().first()
        
        if not user:
            logger.info("Creating initial superuser...")
            superuser = User(
                email="admin@winvinaya.com",
                username="admin",
                full_name="Administrator",
                hashed_password=get_password_hash("admin123"), # Change this after login!
                is_superuser=True,
                is_active=True,
                role=UserRole.ADMIN
            )
            db.add(superuser)
            await db.commit()
            logger.info("Superuser created successfully!")
        else:
            logger.info("Database already contains data. Skipping initialization.")

async def main() -> None:
    logger.info("Initializing WVIS database...")
    await create_first_user()
    logger.info("Database initialization complete.")

if __name__ == "__main__":
    asyncio.run(main())
