import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "@/styles/index.module.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }) {
  return (
    <div className={styles.content}>
      <Provider store={store}>
        <Navbar />
          <Component {...pageProps} />
        <Footer />
      </Provider>
    </div>
  );
}
