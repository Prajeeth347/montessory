import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent19 from "../components/FrameComponent19";
import RecentBlogs from "../components/RecentBlogs";
import { useNavigate } from "react-router-dom";
import "./InternalBlogPage.css";

const InternalBlogPage = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-school-page");
  }, [navigate]);

  const onGalleryTextClick = useCallback(() => {
    navigate("/gallery-page");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    navigate("/events-page");
  }, [navigate]);

  const onBlogsTextClick = useCallback(() => {
    navigate("/blogs-page");
  }, [navigate]);

  const onVirtualTourTextClick = useCallback(() => {
    navigate("/virtual-tour");
  }, [navigate]);

  const onPrivacyPolicyTextClick = useCallback(() => {
    navigate("/privacy-policy-page");
  }, [navigate]);

  return (
    <div className="internal-blog-page">
      <main className="frame-parent24">
        <FrameComponent
          navbarAlignSelf="unset"
          navbarPadding="0rem var(--padding-3xs)"
          navbarWidth="88.375rem"
          logo1="/logo-1@2x.png"
          logo1IconFlexWrap="unset"
          navMenuMinWidth="unset"
          homeMinWidth="unset"
        />
        <section className="instance-parent4">
          <FrameComponent19
            contact="Blogs"
            contactUs="Blog Name"
            image36="/image-361@2x.png"
          />
          <div className="blog-content-wrapper">
            <div className="blog-content">
              <div className="blog-post">
                <div className="post-header">
                  <div className="image-38-wrapper">
                    <img
                      className="image-38-icon"
                      alt=""
                      src="/image-38@2x.png"
                    />
                  </div>
                  <div className="post-date">
                    <div className="image-38-wrapper">
                      <div className="date-layout">
                        <div className="date-labels">
                          <div className="date-headers">
                            <img
                              className="date-spacer-icon"
                              alt=""
                              src="/date-spacer@2x.png"
                            />
                            <div className="date-values">
                              <div className="date-items">
                                <b className="date">DATE</b>
                                <b className="aug-14-2024">Aug 14, 2024</b>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="date-layout-child" />
                        <div className="date-labels1">
                          <div className="parent">
                            <img
                              className="date-spacer-icon"
                              alt=""
                              src="/date-spacer@2x.png"
                            />
                            <div className="frame-wrapper12">
                              <div className="date-items">
                                <b className="last-updated">LAST UPDATED</b>
                                <b className="aug-14-2024">Aug 14, 2024</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <b className="th-august-2024">15th August 2024</b>
                  </div>
                </div>
                <div className="join-us-in-celebrating-indias-wrapper">
                  <div className="join-us-in-container">
                    <p className="join-us-in-celebrating-indias">
                      Join us in celebrating India’s Independence Day on 15th
                      August 2024 at Montessori Prime School Yellapur Campus.
                      Witness the pride and honor as we salute our nation and
                      remember the sacrifices made for our freedom. The event
                      will be live-streamed on our YouTube channel h
                      <a
                        className="ttpswwwyoutubecommontes"
                        href="https://www.youtube.com/@montessorijnprime?fbclid=IwZXh0bgNhZW0CMTAAAR3ihWe9bPUxQIHjLHFZmjQWzbk0-ZOdTujp5FxnBiFteH2QLlG5WrgH7jQ_aem_GDEXqyOOJRp1q22JEixwRw"
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">{`ttps://www.youtube.com/@montessorijnprime `}</span>
                      </a>
                      at 9:00 AM. Let’s unite in the spirit of patriotism and
                      celebrate this momentous occasion together.
                    </p>
                    <p className="join-us-in-celebrating-indias">
                      {`YouTube Live link `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.youtube.com/watch?v=Uz3oRyyaMFs&fbclid=IwZXh0bgNhZW0CMTAAAR3vKZ0yU4D9XbDTUi6K4NQgUgRleCJ4pOnsfM9XnBXsl9CROS9ypTmz11Y_aem_k_fMSi4Gkr1qAXbFUBt6mw`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          https://www.youtube.com/watch?v=Uz3oRyyaMFs
                        </span>
                      </a>
                    </p>
                    <p className="join-us-in-celebrating-indias">
                      Please Visit Our Website Blog for more
                    </p>
                    <p className="join-us-in-celebrating-indias">
                      <a
                        className="ttpswwwyoutubecommontes"
                        href="https://www.montessorijnprime.com/montessori/prime/news?fbclid=IwZXh0bgNhZW0CMTAAAR0zW-Yl91ULjKnyvXpWScSPztBe0jtr7V4CwTcCbkG_hvEKZi3AHri35rY_aem_VqPmwPowYD2-spACq9wgeA"
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          https://www.montessorijnprime.com/montessori/prime/news
                        </span>
                      </a>
                    </p>
                    <p className="join-us-in-celebrating-indias">
                      Follow us for more updates, insights, and a glimpse into
                      the exciting world of Montessori Prime School.
                    </p>
                    <p className="join-us-in-celebrating-indias">
                      {` Website: `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.montessorijnprime.com%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR0bQl5G3YSI0tQjque1P17_sfnLZS6Vn29ww7HPnOO_rlwG95OUnkVk7y4_aem_wfYZak4gM7Ks_z0NsSYMkg&h=AT2XAvjDYUdbflhA14yK4iZAqzTJwPxI3VCRyLnnoOaqTGUrAHjSrDcuQGdIDgDF7IdkhvsXUyARR5hFV7xgjmvuz5THLSxsilIUj4nFH4kw21drCTT3shbx1ltV-ft3p1bY&__tn__=-UK-R&c[0]=AT3Hf4FE8grQ5Btxw71HuPdk87W54rQ-TtzsIpoibnsMV-Ic4oIc5Rbw1ZzQifdAKMA9vB9S1KerYvErtFoX65ZAj2AvwKVG2gBB5t4L6u6fFV04wd8FbueFTXk-jQkBH0C2-RBem9wofw7aQaLqjWvbwlnpUATVWvQusZny6JrXt6fOBXJjJdu250LycFEYjmf8qWTj3g`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          www.montessorijnprime.com
                        </span>
                      </a>
                    </p>
                    <p className="join-us-in-celebrating-indias">
                      {` Facebook: `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/montessorijnprime?__cft__[0]=AZUaL6p6XU2j5dKbVuYuYKWPT-YVCsWRBaAomlILZhzRgrs0o8Vn7oelh0Q_HmqriZ-7oPgXTA8DnBMUl8nlxaoXzAGD-wWyXFDH1yOEg-OEJGu1IdVnoOLZ8918txfPhJA15mgpHKkl-meOzVKjtU2lYUHAMnUCW_bakHuCNQbA8cOBPhEUvjm3F6OHwW0hmZkyA7ll0FDUgAl4PZuHYet_&__tn__=-]K-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          facebook.com/montessorijnprime
                        </span>
                      </a>
                    </p>
                    <p className="join-us-in-celebrating-indias">
                      {` Instagram: `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fmontessorijnprime%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR0bQl5G3YSI0tQjque1P17_sfnLZS6Vn29ww7HPnOO_rlwG95OUnkVk7y4_aem_wfYZak4gM7Ks_z0NsSYMkg&h=AT2jTBeC8MiGfl3UK5E4rAxKSvesarmavP3Wdx6Cwe0wijAg9C4CD3nvhqWcgYBoxVQGy14Zkbzlo8e7uFbaCz6WxqSqfo6n87snxBD0A7SN6E3p5I59P2cbnB9JPPM2Oc-5&__tn__=-UK-R&c[0]=AT3Hf4FE8grQ5Btxw71HuPdk87W54rQ-TtzsIpoibnsMV-Ic4oIc5Rbw1ZzQifdAKMA9vB9S1KerYvErtFoX65ZAj2AvwKVG2gBB5t4L6u6fFV04wd8FbueFTXk-jQkBH0C2-RBem9wofw7aQaLqjWvbwlnpUATVWvQusZny6JrXt6fOBXJjJdu250LycFEYjmf8qWTj3g`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          instagram.com/montessorijnprime
                        </span>
                      </a>
                    </p>
                    <p className="join-us-in-celebrating-indias">
                      {` Twitter: `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2Fmjnprime%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR0zW-Yl91ULjKnyvXpWScSPztBe0jtr7V4CwTcCbkG_hvEKZi3AHri35rY_aem_VqPmwPowYD2-spACq9wgeA&h=AT2ZQJlSBigGILOjgVR4OPIoIJfpJPxeqCNxPtVoiBpqzbBkE-wMhplzrHEae1egcYTv7CyCZKsnDmagotaU4mKiEkZ37SgVHZshaoQEyo9_LdaPZbg0qy4qOxeVsJ_rruR6&__tn__=-UK-R&c[0]=AT3Hf4FE8grQ5Btxw71HuPdk87W54rQ-TtzsIpoibnsMV-Ic4oIc5Rbw1ZzQifdAKMA9vB9S1KerYvErtFoX65ZAj2AvwKVG2gBB5t4L6u6fFV04wd8FbueFTXk-jQkBH0C2-RBem9wofw7aQaLqjWvbwlnpUATVWvQusZny6JrXt6fOBXJjJdu250LycFEYjmf8qWTj3g`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          twitter.com/mjnprime
                        </span>
                      </a>
                    </p>
                    <p className="join-us-in-celebrating-indias">
                      {" "}
                      Email: info@montessorijnprime.com
                    </p>
                    <p className="join-us-in-celebrating-indias">
                      {" "}
                      Contact: 7700051010, 7700063030, 7700053030, 7700043030
                    </p>
                    <p className="join-us-in-celebrating-indias">
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/mps?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">#MPS</span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/montessoriprimewarangal?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #montessoriprimewarangal
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/mems?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">#mems</span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/childrens?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #childrens
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/education?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #education
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/students?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #students
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/telangana?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #Telangana
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/teachers?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #teachers
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/montessoriprimeschool?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #montessoriprimeschool
                        </span>
                      </a>
                    </p>
                    <p className="independenceday-india-patrio">
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/independenceday?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #IndependenceDay
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/india?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">#India</span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/patriotism?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #Patriotism
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/proudtobeindian?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #ProudToBeIndian
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/15august2024?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #15August2024
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/montessoriprimeschool?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #MontessoriPrimeSchool
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/freedom?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #Freedom
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/celebration?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #Celebration
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/livestream?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #LiveStream
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/youtubelive?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #YouTubeLive
                        </span>
                      </a>
                      {` `}
                      <a
                        className="ttpswwwyoutubecommontes"
                        href={`https://www.facebook.com/hashtag/unityindiversity?__eep__=6&__cft__[0]=AZXpzlqVCWBcD5tEQKCubjXsIVojuGUNAQB0EthD3AzgLaC-N40VcU-9ZNxzULW672fY77kgndAQontukCkCbARFbrrcIDFdt9I6Ypr-PNmzjMhBjwlVvb_MvwFgCrV5W-N0hRvdGPYj7ZDOS84KnxILykV5TpmQImpgYllV5PEvlzPPef1amqh-DO8t2q6BkMc&__tn__=*NK-R`}
                        target="_blank"
                      >
                        <span className="ttpswwwyoutubecommontes1">
                          #UnityInDiversity
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-list">
                <RecentBlogs />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer9">
        <div className="school-description-parent">
          <div className="school-description2">
            <div className="image-35-parent7">
              <img
                className="image-35-icon9"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
              <div className="montessori-prime-school-aims-p-wrapper5">
                <b className="montessori-prime-school9">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school!
                </b>
              </div>
            </div>
          </div>
          <div className="explore-menu">
            <div className="menu-links">
              <div className="explore-wrapper5">
                <h3 className="explore9">Explore</h3>
              </div>
              <div className="link-list">
                <div
                  className="about-us9"
                  onClick={onAboutUsTextClick}
                >{`>>About Us`}</div>
                <a
                  className="gallery9"
                  onClick={onGalleryTextClick}
                >{`>> Gallery`}</a>
                <a
                  className="events9"
                  onClick={onEventsTextClick}
                >{`>> Events`}</a>
                <a
                  className="blogs9"
                  onClick={onBlogsTextClick}
                >{`>> Blogs`}</a>
                <div
                  className="virtual-tour10"
                  onClick={onVirtualTourTextClick}
                >{`>> Virtual Tour`}</div>
                <div
                  className="privacy-policy9"
                  onClick={onPrivacyPolicyTextClick}
                >{`>>Privacy Policy`}</div>
              </div>
            </div>
            <div className="timings1">
              <h3 className="opening-hours9">Opening Hours</h3>
              <div className="time-table">
                <div className="timings-list">
                  <div className="mon-800-am9">Mon 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am9">Tue 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am9">Wed 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am9">Thur 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am9">Fri 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am9">Sat 8:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="get-in-touch9">
            <div className="touch-details">
              <div className="get-in-touch-wrapper4">
                <h3 className="opening-hours9">Get In Touch</h3>
              </div>
              <div className="touch-info">
                <div className="frame-parent25">
                  <div className="imgicons8-3-wrapper4">
                    <img
                      className="imgicons8-39"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-3@2x.png"
                    />
                  </div>
                  <div className="frr5f3-bavupet-x9">
                    3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                    506371
                  </div>
                </div>
              </div>
              <div className="contact-details5">
                <div className="imgicons8-4-parent7">
                  <img
                    className="imgicons8-49"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-4@2x.png"
                  />
                  <div className="contact-values">
                    <a
                      className="email1"
                      href="tel:+917700043030"
                      target="_blank"
                    >
                      +91 77000 43030
                    </a>
                  </div>
                </div>
                <div className="imgicons8-5-parent7">
                  <img
                    className="imgicons8-59"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-5@2x.png"
                  />
                  <div className="infomontessorijnprimecom-wrapper7">
                    <a
                      className="infomontessorijnprimecom9"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      info@montessorijnprime.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgicons8-5-parent7">
                <img
                  className="imgicons8-49"
                  loading="lazy"
                  alt=""
                  src="/imgicons8-6@2x.png"
                />
                <a className="email1" href="tel:+917700053030" target="_blank">
                  +91 77000 53030
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InternalBlogPage;
