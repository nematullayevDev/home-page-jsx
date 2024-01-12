import Button from "./Button";
function MainHome() {
  return (
    <div className="main_df">
      <div className="main_wrap">
        <img className="main_wrap_img" src="./unplash.jpg" alt="" />
        <div className="mina_wrap_foter">
          <h2 className="main_wrap_h2">The Bright Future of Web 3.0?</h2>
          <div className="main_wrao_desc">
            <p className="main_wrap_p">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <div className="main_wrap_btn_div">
              <Button />
            </div>
          </div>
        </div>
      </div>
      <div className="main_texts">
        <h1 className="main_taxts">New</h1>
        <ul className="main_taxts_ul">
          <li className="main_texts_li">
            <a className="li_h2">Hydrogen VS Electric Cars</a>
            <p className="li_p">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </li>
          <hr className="main_hr" />
          <li className="main_texts_li">
            <a className="li_h2">The Downsides of AI Artistry</a>
            <p className="li_p">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </li>
          <hr className="main_hr" />
          <li className="main_texts_li">
            <a className="li_h2">Is VC Funding Drying Up?</a>
            <p className="li_p">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainHome;
