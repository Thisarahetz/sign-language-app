interface IProps {
  profile_image: string | null;
  first_name: string;
  last_name: string;
}

export default function ProfileImage({
  profile_image,
  first_name,
  last_name,
}: IProps) {
  return profile_image ? (
    <div className="image-wrapper is-driver-img">
      <img
        src={profile_image}
        loading="lazy"
        sizes="(max-width: 479px) 56px, 72px"
        alt=""
        className="image-cover"
      />
    </div>
  ) : (
    <div className="image-wrapper is-driver-no-img">
      <div className="no-img-name-initials">
        {first_name?.charAt(0).toUpperCase()}
        {last_name?.charAt(0).toUpperCase()}
      </div>
    </div>
  );
}
