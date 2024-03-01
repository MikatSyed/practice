import Image from "next/image";
import styles from "../../../styles/contact.module.css";
import contactImage from "../../../assets/contact.webp";

const Contact = () => {
  return (
    <section>
     <p>Home Renovation Service / Contact Us</p>
      <div className={styles.main}>
   
    <div className={styles.left}>
        <Image src={contactImage} alt="Image" height={600} width={600} className={styles.img}/>
    </div>
    <div className={styles.right}>
        <h2>Reach Out to Us</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
            <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
          </div>
          <div className={styles.formGroup}>
            <input type="email" id="email" name="email" placeholder="Email" required />
            <input type="tel" id="phone" name="phone" placeholder="Phone" required />
          </div>
          <div className={styles.formGroup}>
            <input type="text" id="city" name="city" placeholder="City" required />
            <input type="text" id="postalCode" name="postalCode" placeholder="Postal Code" required />
          </div>
          <div className={styles.formGroup}>
            <input type="text" id="streetAddress" name="streetAddress" placeholder="Street Address" required />
          </div>
          <div className={styles.formGroup}>
            <textarea id="message" name="message" placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
    </div>
</div>
    </section>
  );
};

export default Contact;
