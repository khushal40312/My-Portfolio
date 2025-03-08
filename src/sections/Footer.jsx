const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon">
          <a className="flex items-center justify-center" href="https://github.com/khushal40312">   <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" /></a>
          </div>
          {/* <div className="social-icon">
          <a href="" className="flex items-center justify-center"> <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" /></a>
          </div> */}
          <div className="social-icon">
           <a className="flex items-center justify-center" href="https://www.instagram.com/___terror____/?utm_source=ig_web_button_share_sheet"> <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" /></a>
          </div>
        </div>
  
        <p className="text-white-500">© 2024 Khushal. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;