import calendar from "../../assets/calendar-regular.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div
        style={{
          width: "80%",
          height: "60vh",
          margin: "8rem auto 0 auto",
          backgroundColor: "#fff",
          borderRadius: ".3rem",
          boxShadow: "5px 5px 20px rgba(117, 117, 117, 0.06)",
        }}
      >
        <h3 style={{ textAlign: "center", paddingTop: "2rem" }}>
          Discover my projects:
        </h3>
        <div
          style={{
            paddingTop: "4rem",
            display: "flex",
            gap: "2rem",
            width: "80%",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <Link to="/scheduler/calendar">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                width: "10rem",
                height: "10rem",
                backgroundColor: "rgba(240, 240, 240, 1)",
                borderRadius: ".3rem",
                boxShadow: "5px 5px 10px rgba(117, 117, 117, 0.26)",
              }}
            >
              <img
                src={calendar}
                alt="cargoSchedulerApp"
                style={{ width: "5rem" }}
              />
              <p>Cargo Scheduler</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
