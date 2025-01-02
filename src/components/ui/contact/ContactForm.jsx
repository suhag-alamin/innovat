/* eslint-disable no-unused-vars */
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Check } from "../../Image";
import ContactDetails from "./ContactDetails";

const ContactForm = () => {
  const formRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    user_email: "",
    companyName: "",
    countryCode: "",
    contactNumber: "",
    enquiryStatus: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            setIsLoading(false);
            setIsSuccess(true);
          },
          (error) => {
            console.log(error);
            alert("Something went wrong!  Try again later.");
            setIsLoading(false);
          }
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Add text-visible class when user starts writing
    if (value) {
      e.target.classList.add("text-visible");
    } else {
      e.target.classList.remove("text-visible");
    }
  };

  return (
    <div className="icontainer">
      <div className="contact-section">
        {!isSuccess && !isLoading ? (
          <Row className="g-5 g-lg-5">
            <Col lg={6}>
              <ContactDetails />
            </Col>

            <Col lg={6}>
              <div className="enquiry-form">
                <h2>Submit an Enquiry</h2>
                <Form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <Row className="">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="label">First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="label">Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group>
                    <Form.Label className="label">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      name="user_email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="label">Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Company Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Row className="">
                    <Col xs={4} md={4}>
                      <Form.Group>
                        <Form.Label className="label">Country Code</Form.Label>
                        <Form.Select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          required
                        >
                          <option value="+93">Afghanistan +93</option>
                          <option value="+355">Albania +355</option>
                          <option value="+213">Algeria +213</option>
                          <option value="+376">Andorra +376</option>
                          <option value="+244">Angola +244</option>
                          <option value="+54">Argentina +54</option>
                          <option value="+374">Armenia +374</option>
                          <option value="+61">Australia +61</option>
                          <option value="+43">Austria +43</option>
                          <option value="+994">Azerbaijan +994</option>
                          <option value="+973">Bahrain +973</option>
                          <option value="+880">Bangladesh +880</option>
                          <option value="+375">Belarus +375</option>
                          <option value="+32">Belgium +32</option>
                          <option value="+501">Belize +501</option>
                          <option value="+229">Benin +229</option>
                          <option value="+975">Bhutan +975</option>
                          <option value="+591">Bolivia +591</option>
                          <option value="+387">
                            Bosnia and Herzegovina +387
                          </option>
                          <option value="+267">Botswana +267</option>
                          <option value="+55">Brazil +55</option>
                          <option value="+673">Brunei +673</option>
                          <option value="+359">Bulgaria +359</option>
                          <option value="+226">Burkina Faso +226</option>
                          <option value="+257">Burundi +257</option>
                          <option value="+855">Cambodia +855</option>
                          <option value="+237">Cameroon +237</option>
                          <option value="+1">Canada +1</option>
                          <option value="+238">Cape Verde +238</option>
                          <option value="+236">
                            Central African Republic +236
                          </option>
                          <option value="+235">Chad +235</option>
                          <option value="+56">Chile +56</option>
                          <option value="+86">China +86</option>
                          <option value="+57">Colombia +57</option>
                          <option value="+269">Comoros +269</option>
                          <option value="+242">Congo +242</option>
                          <option value="+243">
                            Congo, Democratic Republic of the +243
                          </option>
                          <option value="+506">Costa Rica +506</option>
                          <option value="+385">Croatia +385</option>
                          <option value="+53">Cuba +53</option>
                          <option value="+357">Cyprus +357</option>
                          <option value="+420">Czech Republic +420</option>
                          <option value="+45">Denmark +45</option>
                          <option value="+253">Djibouti +253</option>
                          <option value="+1">Dominica +1</option>
                          <option value="+1">Dominican Republic +1</option>
                          <option value="+593">Ecuador +593</option>
                          <option value="+20">Egypt +20</option>
                          <option value="+503">El Salvador +503</option>
                          <option value="+240">Equatorial Guinea +240</option>
                          <option value="+291">Eritrea +291</option>
                          <option value="+372">Estonia +372</option>
                          <option value="+251">Ethiopia +251</option>
                          <option value="+679">Fiji +679</option>
                          <option value="+358">Finland +358</option>
                          <option value="+33">France +33</option>
                          <option value="+241">Gabon +241</option>
                          <option value="+220">Gambia +220</option>
                          <option value="+995">Georgia +995</option>
                          <option value="+49">Germany +49</option>
                          <option value="+233">Ghana +233</option>
                          <option value="+30">Greece +30</option>
                          <option value="+299">Greenland +299</option>
                          <option value="+1">Grenada +1</option>
                          <option value="+502">Guatemala +502</option>
                          <option value="+224">Guinea +224</option>
                          <option value="+245">Guinea-Bissau +245</option>
                          <option value="+592">Guyana +592</option>
                          <option value="+509">Haiti +509</option>
                          <option value="+504">Honduras +504</option>
                          <option value="+852">Hong Kong +852</option>
                          <option value="+36">Hungary +36</option>
                          <option value="+354">Iceland +354</option>
                          <option value="+91">India +91</option>
                          <option value="+62">Indonesia +62</option>
                          <option value="+98">Iran +98</option>
                          <option value="+964">Iraq +964</option>
                          <option value="+353">Ireland +353</option>
                          <option value="+972">Israel +972</option>
                          <option value="+39">Italy +39</option>
                          <option value="+225">Ivory Coast +225</option>
                          <option value="+1">Jamaica +1</option>
                          <option value="+81">Japan +81</option>
                          <option value="+962">Jordan +962</option>
                          <option value="+7">Kazakhstan +7</option>
                          <option value="+254">Kenya +254</option>
                          <option value="+686">Kiribati +686</option>
                          <option value="+965">Kuwait +965</option>
                          <option value="+996">Kyrgyzstan +996</option>
                          <option value="+856">Laos +856</option>
                          <option value="+371">Latvia +371</option>
                          <option value="+961">Lebanon +961</option>
                          <option value="+266">Lesotho +266</option>
                          <option value="+231">Liberia +231</option>
                          <option value="+218">Libya +218</option>
                          <option value="+423">Liechtenstein +423</option>
                          <option value="+370">Lithuania +370</option>
                          <option value="+352">Luxembourg +352</option>
                          <option value="+853">Macau +853</option>
                          <option value="+389">Macedonia +389</option>
                          <option value="+261">Madagascar +261</option>
                          <option value="+265">Malawi +265</option>
                          <option value="+60">Malaysia +60</option>
                          <option value="+960">Maldives +960</option>
                          <option value="+223">Mali +223</option>
                          <option value="+356">Malta +356</option>
                          <option value="+692">Marshall Islands +692</option>
                          <option value="+222">Mauritania +222</option>
                          <option value="+230">Mauritius +230</option>
                          <option value="+52">Mexico +52</option>
                          <option value="+691">Micronesia +691</option>
                          <option value="+373">Moldova +373</option>
                          <option value="+377">Monaco +377</option>
                          <option value="+976">Mongolia +976</option>
                          <option value="+382">Montenegro +382</option>
                          <option value="+212">Morocco +212</option>
                          <option value="+258">Mozambique +258</option>
                          <option value="+95">Myanmar +95</option>
                          <option value="+264">Namibia +264</option>
                          <option value="+674">Nauru +674</option>
                          <option value="+977">Nepal +977</option>
                          <option value="+31">Netherlands +31</option>
                          <option value="+64">New Zealand +64</option>
                          <option value="+505">Nicaragua +505</option>
                          <option value="+227">Niger +227</option>
                          <option value="+234">Nigeria +234</option>
                          <option value="+47">Norway +47</option>
                          <option value="+968">Oman +968</option>
                          <option value="+92">Pakistan +92</option>
                          <option value="+680">Palau +680</option>
                          <option value="+970">Palestine +970</option>
                          <option value="+507">Panama +507</option>
                          <option value="+675">Papua New Guinea +675</option>
                          <option value="+595">Paraguay +595</option>
                          <option value="+51">Peru +51</option>
                          <option value="+63">Philippines +63</option>
                          <option value="+48">Poland +48</option>
                          <option value="+351">Portugal +351</option>
                          <option value="+974">Qatar +974</option>
                          <option value="+40">Romania +40</option>
                          <option value="+7">Russia +7</option>
                          <option value="+250">Rwanda +250</option>
                          <option value="+685">Samoa +685</option>
                          <option value="+378">San Marino +378</option>
                          <option value="+239">
                            Sao Tome and Principe +239
                          </option>
                          <option value="+966">Saudi Arabia +966</option>
                          <option value="+221">Senegal +221</option>
                          <option value="+381">Serbia +381</option>
                          <option value="+248">Seychelles +248</option>
                          <option value="+232">Sierra Leone +232</option>
                          <option value="+65">Singapore +65</option>
                          <option value="+421">Slovakia +421</option>
                          <option value="+386">Slovenia +386</option>
                          <option value="+677">Solomon Islands +677</option>
                          <option value="+252">Somalia +252</option>
                          <option value="+27">South Africa +27</option>
                          <option value="+82">South Korea +82</option>
                          <option value="+211">South Sudan +211</option>
                          <option value="+34">Spain +34</option>
                          <option value="+94">Sri Lanka +94</option>
                          <option value="+249">Sudan +249</option>
                          <option value="+597">Suriname +597</option>
                          <option value="+268">Swaziland +268</option>
                          <option value="+46">Sweden +46</option>
                          <option value="+41">Switzerland +41</option>
                          <option value="+963">Syria +963</option>
                          <option value="+886">Taiwan +886</option>
                          <option value="+992">Tajikistan +992</option>
                          <option value="+255">Tanzania +255</option>
                          <option value="+66">Thailand +66</option>
                          <option value="+228">Togo +228</option>
                          <option value="+676">Tonga +676</option>
                          <option value="+216">Tunisia +216</option>
                          <option value="+90">Turkey +90</option>
                          <option value="+993">Turkmenistan +993</option>
                          <option value="+688">Tuvalu +688</option>
                          <option value="+256">Uganda +256</option>
                          <option value="+380">Ukraine +380</option>
                          <option value="+971">
                            United Arab Emirates +971
                          </option>
                          <option value="+44">United Kingdom +44</option>
                          <option value="+1">United States +1</option>
                          <option value="+598">Uruguay +598</option>
                          <option value="+998">Uzbekistan +998</option>
                          <option value="+678">Vanuatu +678</option>
                          <option value="+58">Venezuela +58</option>
                          <option value="+84">Vietnam +84</option>
                          <option value="+967">Yemen +967</option>
                          <option value="+260">Zambia +260</option>
                          <option value="+263">Zimbabwe +263</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={8} md={8}>
                      <Form.Group>
                        <Form.Label className="label">
                          Contact Number
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Contact Number"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group>
                    <Form.Label className="label">Investor Type</Form.Label>
                    <Form.Select
                      name="enquiryStatus"
                      value={formData.enquiryStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Investor Type</option>
                      <option value="investor">Individual Investor</option>
                      <option value="institutional">
                        Institutional Investor
                      </option>
                      <option value="advisor">Financial Advisor</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="label">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      type="submit"
                      className="btn-submit"
                      disabled={isLoading}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Check />
            <h4 className="thank-you-text">
              Thank you, we have received your enquiry and will be in contact
              with you shortly.
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
