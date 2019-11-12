import * as React from "react";
import { Row, Col, Button } from "antd";
import "./foo.css";

interface CampaignFooterProps {
  nextButtonText?: any,
  loading?: any,
  saveDraftText?: any,
  saveDraftButtonClass?: any,
  nextButtonClass?: any,
  saveDraft?: any,
  goToPage2?: any
}

export const CampaignFooter: React.FunctionComponent<CampaignFooterProps> = ({
  nextButtonText,
  loading,
  saveDraftText,
  saveDraftButtonClass,
  nextButtonClass,
  saveDraft,
  goToPage2
}) => {
  return (
    <div className="">
      <Button
        loading={loading}
        className={nextButtonClass}
        onClick={goToPage2}
        type="primary"
      >
        {nextButtonText}
      </Button>
      {saveDraftText && (
        <Button
          className={saveDraftButtonClass}
          onClick={saveDraft}
          type="link"
        >
          {saveDraftText}
        </Button>
      )}
    </div>
  );
};
