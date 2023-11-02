export const ConfirmedStatus = {
  confirmed: "confirmed",
  unconfirmed: "unconfirmed",
  deliberation: "deliberation",
} as const;

export type ConfirmedStatus = keyof typeof ConfirmedStatus;
