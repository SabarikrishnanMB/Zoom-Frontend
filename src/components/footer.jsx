import React from "react";
import "../style/footer.css";

export default function Footer() {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
    <section className="mt-5">
      <p class="d-flex justify-content-center align-items-center">
        <span class="download me-3">Download for free</span>
        <a
          class="playstore btn btn-outline btn-rounded m-2"
          href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings"
          target="_blank"
          role="button"
        >
          <img src="../playstore.svg"/>
        </a>
      </p>
      <footer>
        <div className="allrights text-center text-white p-3">
          © {date} All Rights Reserved
        </div>
      </footer>
    </section>
  );
}
