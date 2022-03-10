import { useFetch } from "hooks/useFetch";

export default function Main({ content }) {
  
  const {data:user} = useFetch(`/user/${content.id_user}`)
  return (
    <>
      <div className="py-3 bb-black">
        <h6 className="color-gray">{content.date}</h6>

        <h6 className="uppercase color-primary">{content.category}</h6>
        <a href="/" className="link-title">
          <h4 className="mt-1">{content.title}</h4>
        </a>

        <p className="mt-1">{content.resume}</p>
        <div className="mt-2 flex-space">
          <div className="flex-start-row mt-3">
            <div className="profile">
              <img src={user.imageProfile} alt="" className="profile-img" />
            </div>
            <div className="ml-1">
              <h6 className="color-primary">{user.name} {user.surname}</h6>
              <h6 className="color-gray">{user.user}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
