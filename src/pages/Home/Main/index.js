export default function Main({ content }) {
  return (
    <>
      <div className="py-3 bb-black">
        <h6 className="color-gray">{content.date}</h6>

        <h6 className="uppercase color-primary">{content.category}</h6>
        <a href="/" className="link-title">
          <h4 className="mt-1">{content.title}</h4>
        </a>

        <p className="mt-1">
        {content.resume}
        </p>
        <div className="flex-start-row mt-3">
          <div className="profile">
            <img src="profile/alex.png" alt="" className="profile-img" />
          </div>
          <div className="ml-1">
            <h6 className="color-primary">Alex Strange</h6>
            <h6 className="color-gray">@alex_strange</h6>
          </div>
        </div>
      </div>
    </>
  );
}
