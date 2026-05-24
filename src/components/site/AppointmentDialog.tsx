import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { useLanguage } from "@/hooks/use-language";

type AppointmentDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTreatment?: string;
};

export function AppointmentDialog({
  open,
  onOpenChange,
  defaultTreatment = "",
}: AppointmentDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-surface sm:max-w-lg sm:rounded-[28px]">
        <DialogHeader>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("form.dialogEyebrow")}
          </span>
          <DialogTitle className="text-2xl font-bold text-ink">{t("form.dialogTitle")}</DialogTitle>
          <DialogDescription className="text-ink-soft">{t("form.dialogDescription")}</DialogDescription>
        </DialogHeader>
        <AppointmentForm
          key={`${open}-${defaultTreatment}`}
          defaultTreatment={defaultTreatment}
          compact
        />
      </DialogContent>
    </Dialog>
  );
}
