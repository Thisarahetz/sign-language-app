export type userData = {
  name: string;
  phone_number: string;
  email: string;
};

type Props = {
  userData: userData;
};

export default function DriverBasicDetails({ userData }: Props) {
  return (
    <div className="customer_details_grid_wrapper">
      <div className="customer_details_row">
        <div className="customer_details_wrapper">
          <div className="details_text_wrapper">
            <div className="detail_title">Username</div>
            <div className="detail_value">{userData.name}</div>
          </div>
        </div>
        <div className="customer_details_wrapper">
          <div className="details_text_wrapper">
            <div className="detail_title">Phone number</div>
            <div className="detail_value">{userData.phone_number}</div>
          </div>
        </div>
        <div className="customer_details_wrapper">
          <div className="details_text_wrapper">
            <div className="detail_title">Email</div>
            <div className="detail_value">{userData.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
