export type UserData = {
  id: number;
  bank_name: string;
  bsb: string;
  account_holder_name: string;
  account_no: string;
  created_at: string;
  user_id: number;
};

type Props = {
  userData: UserData;
};

export default function DriverBankDetails({ userData }: Props) {
  return (
    <div className="customer_details_grid_wrapper">
      <div className="customer_details_row">
        <div className="customer_details_wrapper">
          <div className="details_text_wrapper">
            <div className="detail_title">Bank</div>
            <div className="detail_value">{userData?.bank_name}</div>
          </div>
        </div>
        <div className="customer_details_wrapper">
          <div className="details_text_wrapper">
            <div className="detail_title">Account No</div>
            <div className="detail_value">{userData?.account_no}</div>
          </div>
        </div>
        <div className="customer_details_wrapper">
          <div className="details_text_wrapper">
            <div className="detail_title">Account Holder Name</div>
            <div className="detail_value">{userData?.account_holder_name}</div>
          </div>
        </div>
      </div>
      <div className="customer_details_row">
        <div className="customer_details_wrapper">
          <div className="details_text_wrapper">
            <div className="detail_title">Bank State Branch(BSB)</div>
            <div className="detail_value">{userData?.bsb}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
