import FooterCSS from "/footer/Footer.css";

export default function Footer() {
  return (
    <div className="container-fluid footer text-white text-center p-2 pt-4">
      <div className="row h5 opacity-50 mx-auto">
        <div class="col-12 col-lg-6 col-md-12">
          <p className="fs">
            „Omenirea trebuie să învețe să înțeleagă că viața unui animal nu
            este în niciun fel mai puțin prețioasă decât a noastră.”
          </p>
        </div>
        <div class="col-12 col-lg-6 col-md-12 ">
          <p className="fs">
            <i>Vorbește pentru cei fără voce.</i>
          </p>
          <div className="row p opaq mx-auto">
            <p className="fs"> Copyright &copy; 2022 Nature Smarter </p>
          </div>
        </div>
      </div>
    </div>
  );
}
