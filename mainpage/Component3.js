import Component3CSS from "/mainpage/Component3.css";

export default function Component3() {
  return (
    <div className="row mt-5 poa">
      <video
        src="https://imj31us4am50.github.io/NSEDITEDVIDS/animal-video-5.mp4"
        className="aoba col-md-6 mx-auto"
        controls
        muted
        autoPlay
        loop
      />
      <div className="container-for-description col-md-6 mx-auto mt-3 ml-3 mr-3">
        <h1>title</h1>
        <p>text</p>
      </div>
    </div>
  );
}
