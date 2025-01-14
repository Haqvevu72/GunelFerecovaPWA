import SocialButton from "./SocialButton";
import ph from "@assets/images/phone.png";
import wp from "@assets/images/wp.png";
import fb from "@assets/images/fb.png";
import insta from "@assets/images/insta.png";
import web from "@assets/images/web.png";
import rating from "@assets/images/g.png";
import share from "@assets/images/share.png";
import loc from "@assets/images/location.png";

const SocialButtons = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-center px-2 ml-16">
        <SocialButton
          href="tel:+994557410105"
          src={ph}
          alt="ph"
        />
        <SocialButton
          href="https://www.instagram.com/endokrinoloq_gunel_recebova/?utm_medium=copy_link"
          src={insta}
          alt="insta"
        />
        <SocialButton
          href="https://wa.me/+994557410105"
          src={wp}
          alt="wp"
        />
        <SocialButton
          href="https://www.facebook.com/dr.gunel.recebova/?locale=az_AZ"
          src={fb}
          alt="fb"
        />
      </div>
      <div className="flex w-screen items-center justify-center px-2">
        <SocialButton
          href="https://doctorgunel.az/"
          src={web}
          alt="web"
        />
        <SocialButton
          href="#"
          src={share}
          alt="share"
        />
        <SocialButton
          href="#"
          src={rating}
          alt="rating"
        />
        <SocialButton
          href="https://maps.app.goo.gl/oXqDkCPdcEfxj3R8A"
          src={loc}
          alt="location"
        />
      </div>
    </div>
  );
};

export default SocialButtons;
