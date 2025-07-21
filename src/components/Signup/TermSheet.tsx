import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";

function TermSheet({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  return (
    <Sheet
      open={isOpen}
      onOpenChange={(value) => {
        setIsOpen(value);
      }}
    >
      <SheetContent side={"bottom"} className="h-[calc(100vh/2)]">
        <SheetHeader className="px-2">
          <SheetTitle>{"약관"}</SheetTitle>
          <SheetDescription>약관 헤더</SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-[95%] pr-8 pt-4 pb-20">
          <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white shadow-lg rounded-lg border border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
              회원가입 및 서비스 이용 약관
            </h1>

            <p className="mb-6 text-gray-700 leading-relaxed">
              본 약관은{" "}
              <strong className="font-semibold text-red-600">
                [서비스 이름]
              </strong>{" "}
              (이하 "회사" 또는 "서비스")이 제공하는 회원제 서비스 이용과
              관련하여 회사와 회원 간의 권리, 의무 및 책임 사항, 기타 필요한
              사항을 규정함을 목적으로 합니다.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              제1조 (목적)
            </h2>
            <p className="mb-4 text-gray-700">
              본 약관은{" "}
              <strong className="font-semibold text-red-600">
                [서비스 이름]
              </strong>{" "}
              (이하 "회사" 또는 "서비스")이 제공하는 회원제 서비스 이용과
              관련하여 회사와 회원 간의 권리, 의무 및 책임 사항, 기타 필요한
              사항을 규정함을 목적으로 합니다.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              제2조 (용어의 정의)
            </h2>
            <ol className="list-decimal pl-5 mb-4 text-gray-700">
              <li className="mb-2">
                <strong className="font-semibold text-red-600">"서비스"</strong>
                라 함은 회사가 구현한 단말기(PC, 휴대형 단말기 등의 각종 유무선
                장치를 포함)를 통하여 회원이 이용할 수 있는{" "}
                <strong className="font-semibold text-red-600">
                  [회원가입 폼을 통해 가입하는 서비스의 대략적인 설명, 예:
                  디지털 콘텐츠, 커뮤니티, 정보 제공 등]
                </strong>
                을 의미합니다.
              </li>
              <li className="mb-2">
                <strong className="font-semibold text-red-600">"회원"</strong>
                이라 함은 회사의 서비스에 접속하여 본 약관에 따라 회사와
                이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을
                말합니다.
              </li>
              <li className="mb-2">
                <strong className="font-semibold text-red-600">
                  "아이디(ID)"
                </strong>
                라 함은 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가
                승인하는 문자와 숫자의 조합을 의미합니다.
              </li>
              <li className="mb-2">
                <strong className="font-semibold text-red-600">
                  "비밀번호"
                </strong>
                라 함은 회원이 부여받은 아이디와 일치되는 회원임을 확인하고
                비밀보호를 위해 회원 자신이 정한 문자 또는 숫자의 조합을
                의미합니다.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              제3조 (약관의 효력 발생 및 변경)
            </h2>
            <ol className="list-decimal pl-5 mb-4 text-gray-700">
              <li className="mb-2">
                본 약관은 회원이 회원가입 시 본 약관에 동의하고 서비스 이용을
                신청함으로써 효력이 발생합니다.
              </li>
              <li className="mb-2">
                회사는 "약관의 규제에 관한 법률", "정보통신망 이용촉진 및
                정보보호 등에 관한 법률" 등 관련 법령을 위배하지 않는 범위에서
                본 약관을 변경할 수 있습니다.
              </li>
              <li className="mb-2">
                회사가 약관을 변경할 경우에는 적용일자 및 변경사유를 명시하여
                현행약관과 함께 서비스 내 또는 초기 화면에 그 적용일자 7일
                전부터 적용일자 전일까지 공지합니다. 다만, 회원에게 불리하게
                약관 내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을
                두고 공지합니다.
              </li>
              <li className="mb-2">
                회원이 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하고
                탈퇴할 수 있습니다. 변경된 약관의 효력 발생일 이후에도 서비스를
                계속 이용하는 경우 회원은 변경된 약관에 동의한 것으로
                간주됩니다.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              제4조 (회원가입)
            </h2>
            <ol className="list-decimal pl-5 mb-4 text-gray-700">
              <li className="mb-2">
                회원가입은 서비스를 이용하려는 자가 본 약관에 동의하고, 회사가
                정한 가입 양식에 따라 정보를 기입한 후 "가입하기" 또는 이와
                유사한 버튼을 누르는 방식으로 이용신청을 하고, 회사가 이러한
                신청을 승낙함으로써 완료됩니다.
              </li>
              <li className="mb-2">
                회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나
                사후에 이용계약을 해지할 수 있습니다.
                <ul className="list-disc pl-8 mt-2">
                  <li className="mb-1">
                    타인의 명의를 이용하거나 도용하여 신청한 경우
                  </li>
                  <li className="mb-1">
                    등록 내용에 허위, 기재누락, 오기가 있는 경우
                  </li>
                  <li className="mb-1">
                    만 14세 미만의 아동이 법정대리인(부모 등)의 동의 없이 신청한
                    경우
                  </li>
                  <li className="mb-1">
                    이전에 회원 자격을 상실한 적이 있는 경우 (단, 회사의 회원
                    재가입 승낙을 얻은 경우는 예외)
                  </li>
                  <li className="mb-1">
                    기타 본 약관 또는 관련 법령에 위배되거나 서비스의 원활한
                    운영을 저해할 수 있다고 회사가 판단하는 경우
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                회사는 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상
                문제가 있는 경우에는 승낙을 유보할 수 있습니다.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              제5조 (회원정보의 변경)
            </h2>
            <ol className="list-decimal pl-5 mb-4 text-gray-700">
              <li className="mb-2">
                회원은 개인정보관리 화면을 통하여 언제든지 본인의 개인정보를
                열람하고 수정할 수 있습니다.
              </li>
              <li className="mb-2">
                회원은 회원가입 신청 시 기재한 사항이 변경되었을 경우 온라인으로
                수정을 하거나 전자우편 기타 방법으로 회사에 대하여 그 변경
                사항을 알려야 합니다.
              </li>
              <li className="mb-2">
                제2항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여
                회사는 책임지지 않습니다.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              제6조 (개인정보보호 의무)
            </h2>
            <p className="mb-4 text-gray-700">
              회사는 "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 및
              "개인정보보호법" 등 관련 법령이 정하는 바에 따라 회원의 개인정보를
              보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련
              법령 및 회사의 개인정보처리방침이 적용됩니다.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              제7조 (회원의 의무)
            </h2>
            <ol className="list-decimal pl-5 mb-4 text-gray-700">
              <li className="mb-2">
                회원은 다음 행위를 하여서는 안 됩니다.
                <ul className="list-disc pl-8 mt-2">
                  <li className="mb-1">신청 또는 변경 시 허위 내용 등록</li>
                  <li className="mb-1">타인의 정보 도용</li>
                  <li className="mb-1">회사가 게시한 정보의 변경</li>
                  <li className="mb-1">
                    회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신
                    또는 게시
                  </li>
                  <li className="mb-1">
                    회사 및 기타 제3자의 저작권 등 지적재산권에 대한 침해
                  </li>
                  <li className="mb-1">
                    회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는
                    행위
                  </li>
                  <li className="mb-1">
                    외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에
                    반하는 정보를 서비스에 공개 또는 게시하는 행위
                  </li>
                  <li className="mb-1">기타 불법적이거나 부당한 행위</li>
                </ul>
              </li>
              <li className="mb-2">
                회원은 관련 법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여
                공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타
                회사의 업무에 방해되는 행위를 하여서는 안 됩니다.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              제8조 (서비스의 제공 등)
            </h2>
            <ol className="list-decimal pl-5 mb-4 text-gray-700">
              <li className="mb-2">
                회사는 회원에게 아래와 같은 서비스를 제공합니다.
                <ul className="list-disc pl-8 mt-2">
                  <li className="mb-1">
                    <strong className="font-semibold text-red-600">
                      [서비스의 주요 내용 나열, 예: 디지털 콘텐츠 열람, 게시물
                      작성, 커뮤니티 활동, 맞춤형 정보 제공 등]
                    </strong>
                  </li>
                  <li className="mb-1">
                    기타 회사가 추가 개발하거나 다른 회사와의 제휴 계약 등을
                    통해 회원에게 제공하는 일체의 서비스
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.
              </li>
              <li className="mb-2">
                회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신
                두절 또는 운영상 상당한 이유가 있는 경우 서비스의 제공을
                일시적으로 중단할 수 있습니다. 이 경우 회사는 제10조("회원에
                대한 통지")에 정한 방법으로 회원에게 통지합니다. 다만, 회사가
                사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수
                있습니다.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              제9조 (서비스의 변경)
            </h2>
            <p className="mb-4 text-gray-700">
              회사는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라
              제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다. 서비스
              내용, 이용 방법, 이용 시간에 대하여 변경이 있는 경우에는 변경
              사유, 변경될 서비스의 내용 및 제공 일자 등을 그 변경 전에 서비스
              초기 화면에 게시하거나 제10조("회원에 대한 통지")의 방법으로
              회원에게 통지합니다.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              제10조 (회원에 대한 통지)
            </h2>
            <ol className="list-decimal pl-5 mb-4 text-gray-700">
              <li className="mb-2">
                회사가 회원에 대한 통지를 하는 경우, 본 약관에 별도 규정이 없는
                한 회원이 제공한 전자우편주소,{" "}
                <strong className="font-semibold text-red-600">
                  [서비스 내 알림]
                </strong>
                ,{" "}
                <strong className="font-semibold text-red-600">
                  [휴대폰 문자메시지]
                </strong>{" "}
                등으로 할 수 있습니다.
              </li>
              <li className="mb-2">
                회사는 회원 전체에 대한 통지의 경우 7일 이상 서비스 초기 화면에
                게시함으로써 제1항의 통지에 갈음할 수 있습니다.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              제11조 (이용계약 해지 및 서비스 이용 제한)
            </h2>
            <ol className="list-decimal pl-5 mb-4 text-gray-700">
              <li className="mb-2">
                회원은 언제든지 개인정보관리 메뉴 또는 고객센터를 통하여 서비스
                이용계약 해지(회원 탈퇴) 신청을 할 수 있으며, 회사는 관련 법령이
                정하는 바에 따라 이를 즉시 처리하여야 합니다.
              </li>
              <li className="mb-2">
                회원이 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을
                방해한 경우, 회사는 사전 통보 없이 서비스 이용을 제한하거나
                이용계약을 해지할 수 있습니다.
              </li>
              <li className="mb-2">
                회사가 회원 자격을 상실시키는 경우에는 회원 등록을 말소합니다.
                이 경우 회원은 재가입이 제한될 수 있습니다.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              제12조 (책임 제한)
            </h2>
            <ol className="list-decimal pl-5 mb-4 text-gray-700">
              <li className="mb-2">
                회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를
                제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
              </li>
              <li className="mb-2">
                회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는
                책임을 지지 않습니다.
              </li>
              <li className="mb-2">
                회사는 회원이 서비스와 관련하여 게재한 정보, 자료, 사실의
                신뢰도, 정확성 등에 대하여는 책임을 지지 않습니다.
              </li>
              <li className="mb-2">
                회사는 회원 간 또는 회원과 제3자 상호 간에 서비스를 매개로 하여
                거래 등을 한 경우에 대하여 책임을 지지 않습니다.
              </li>
              <li className="mb-2">
                회사는 무료로 제공되는 서비스 이용과 관련하여 관련 법령에 특별한
                규정이 없는 한 책임을 지지 않습니다.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              제13조 (준거법 및 재판관할)
            </h2>
            <ol className="list-decimal pl-5 mb-4 text-gray-700">
              <li className="mb-2">
                회사와 회원 간에 발생한 분쟁에 대하여는 대한민국법을 준거법으로
                합니다.
              </li>
              <li className="mb-2">
                회사와 회원 간 발생한 분쟁에 관한 소송은 민사소송법상 관할
                법원에 제기합니다.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 border-b pb-2 border-gray-200">
              부칙
            </h2>
            <p className="mb-4 text-gray-700">
              본 약관은{" "}
              <strong className="font-semibold text-red-600">[시행일자]</strong>
              부터 적용됩니다.
            </p>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export default TermSheet;
