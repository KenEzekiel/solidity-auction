@echo off
echo Disabling Hardhat telemetry...
set HARDHAT_DISABLE_TELEMETRY=true

echo Cleaning Hardhat build...
call npx hardhat clean

echo Deploying MewAuctionApp to localhost...
call npx hardhat ignition deploy ./ignition/modules/MewAuctionApp.ts --network localhost

echo Deployment complete!
pause
