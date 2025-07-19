import {
  Card,
  CardContainer,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardSidebar from "@/components/ui/CardSidebar";

function FormCard() {
  return (
    <CardContainer>
      <CardSidebar goToIndex={() => null} />
      <Card>
        <CardHeader>
          <CardTitle>개인 정보</CardTitle>
          <CardDescription>개인 정보를 입력해 주세요.</CardDescription>
        </CardHeader>
        <div className="p-4"></div>
      </Card>
    </CardContainer>
  );
}

export default FormCard;
