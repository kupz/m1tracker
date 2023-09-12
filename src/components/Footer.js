import React from "react";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentsIcon from "@mui/icons-material/Payments";
import BalanceIcon from "@mui/icons-material/Balance";

export default function Footer() {
  return (
    <footer className="bg-purple-950 flex justify-center ">
      <div className="flex  gap-10 text-white ">
        <div className="flex p-2 gap-5 items-center flex-1 flex-wrap ">
          <AccountBalanceWalletIcon style={{ fontSize: "3rem" }} />
          <div>
            <div className="font-medium">Budget</div>
            <div className="opacity-60">Learn how to budget your income.</div>
          </div>
        </div>

        <div className="flex flex-wrap p-2 gap-5 items-center flex-1">
          <PaymentsIcon style={{ fontSize: "3rem" }} />
          <div>
            <div className="font-medium">Cashflow</div>
            <div className="opacity-60">
              Record the money that comes in and out.
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap p-2 gap-5 items-center flex-1">
          <BalanceIcon style={{ fontSize: "3rem" }} />
          <div>
            <div className="font-medium">Balance Sheet</div>
            <div className="opacity-60">
              List your assets and liabilities to have a clear picture of your
              financial condition.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
