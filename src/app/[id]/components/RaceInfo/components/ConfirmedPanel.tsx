/* eslint-disable @next/next/no-img-element */
import React from "react";

import { ConfirmedStatus } from "@/models";

export const ConfirmedPanel: React.FC<{
  status: ConfirmedStatus;
}> = ({ status }) => {
  switch (status) {
    case "confirmed": {
      return (
        <img
          src={`/images/${ConfirmedStatus.confirmed}.svg`}
          alt="confirmed"
          data-testid="confirmed"
          className="w-full h-auto"
        />
      );
    }
    case "unconfirmed": {
      return (
        <img
          src={`/images/${ConfirmedStatus.unconfirmed}.svg`}
          alt="unconfirmed"
          data-testid="unconfirmed"
          className="w-full h-auto"
        />
      );
    }
    case "deliberation": {
      return (
        <img
          src={`/images/${ConfirmedStatus.deliberation}.svg`}
          alt="deliberation"
          data-testid="deliberation"
          className="w-full h-auto"
        />
      );
    }
  }
};
