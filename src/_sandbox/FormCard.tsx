import {
  Card,
  CardContainer,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardSidebar from "@/components/ui/CardSidebar";
import Step1Sandbox from "./Step1Form";

function FormCard() {
  return (
    <CardContainer>
      <CardSidebar />
      <Card>
        <CardHeader>
          <CardTitle>개인 정보</CardTitle>
          <CardDescription>개인 정보를 입력해 주세요.</CardDescription>
        </CardHeader>
        <div className="p-4">
          <Step1Sandbox />
        </div>
      </Card>
    </CardContainer>
  );
}

export default FormCard;
