'use client';

import { useTranslations } from 'next-intl';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CollectorSurveyForm } from './CollectorSurveyForm';

interface CollectorSurveyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CollectorSurveyDialog({ open, onOpenChange }: CollectorSurveyDialogProps) {
  const t = useTranslations('collectorSurveyModal');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[720px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">{t('title')}</DialogTitle>
        </DialogHeader>
        <div className="max-h-[75vh] overflow-y-auto pr-1 sm:pr-2">
          <CollectorSurveyForm onSubmitted={() => onOpenChange(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

