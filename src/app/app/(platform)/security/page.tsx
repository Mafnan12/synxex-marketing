import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Smartphone, Laptop, KeyRound, ShieldAlert, History } from "lucide-react";

const sessions = [
  { id: "s1", device: "Chrome on Windows", location: "Singapore, SG", lastActive: "Active now", current: true },
  { id: "s2", device: "SynxEx iOS App", location: "Singapore, SG", lastActive: "2h ago", current: false },
];

const loginHistory = [
  { id: "l1", event: "Successful sign-in", location: "Singapore, SG", timestamp: "2026-09-17 08:12" },
  { id: "l2", event: "Password changed", location: "Singapore, SG", timestamp: "2026-09-10 19:44" },
  { id: "l3", event: "Successful sign-in", location: "Singapore, SG", timestamp: "2026-09-09 07:03" },
];

export default function SecurityPage() {
  return (
    <div className="pb-10">
      <PageHeader
        title="Security Center"
        description="Centralized security controls for your unified account. Sensitive actions require explicit confirmation."
      />

      <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Multi-factor authentication</CardTitle>
            <Badge tone="positive">Enabled</Badge>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-sx-text-secondary">
              Authenticator app is your active MFA method for sign-in and withdrawal confirmation.
            </p>
            <Button variant="secondary" size="sm">
              <KeyRound className="h-4 w-4" /> Manage MFA methods
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Withdrawal protection</CardTitle>
            <Badge tone="positive">Active</Badge>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-sx-text-secondary">
              A 24-hour withdrawal address whitelist lock is active. New withdrawal addresses require email + MFA
              confirmation and a cooldown period.
            </p>
            <Button variant="secondary" size="sm">
              Manage whitelist
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active sessions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-0 pb-5">
            {sessions.map((s) => (
              <div key={s.id} className="flex items-center justify-between gap-3 border-b border-sx-border px-5 py-3 last:border-b-0">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sx-surface-sunken text-sx-text-secondary">
                    {s.device.includes("iOS") || s.device.includes("Android") ? (
                      <Smartphone className="h-4 w-4" />
                    ) : (
                      <Laptop className="h-4 w-4" />
                    )}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-sx-text-primary">
                      {s.device} {s.current && <span className="text-xs text-sx-positive">· This device</span>}
                    </p>
                    <p className="text-xs text-sx-text-tertiary">
                      {s.location} · {s.lastActive}
                    </p>
                  </div>
                </div>
                {!s.current && (
                  <Button variant="ghost" size="sm">
                    Revoke
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Login history</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-0 pb-5">
            {loginHistory.map((l) => (
              <div key={l.id} className="flex items-start gap-3 border-b border-sx-border px-5 py-3 last:border-b-0">
                <History className="mt-0.5 h-4 w-4 shrink-0 text-sx-text-tertiary" />
                <div>
                  <p className="text-sm text-sx-text-primary">{l.event}</p>
                  <p className="text-xs text-sx-text-tertiary">
                    {l.location} · {l.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Account recovery</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-sx-text-tertiary" />
              <p className="max-w-lg text-sm text-sx-text-secondary">
                Recovery contacts and backup codes let you regain access without losing your verification tier.
                No recovery method is configured yet.
              </p>
            </div>
            <Button size="sm">Set up recovery</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
