import { useAppDispatch, useAppSelector } from "../../store/hooks";
import DropdownMonth from "./items/DropdownMonth";
import "./Calendar.css";
import DropdownYear from "./items/DropdownYear";
import { useEffect } from "react";
import { calendarActions } from "../../store/calendarSlice";
import MonthChangeBtn from "./items/MonthChangeBtn";
import Button from "./items/Button";
import { modalActions } from "../../store/modalSlice";
import { Link } from "react-router-dom";
import { Shipment } from "../../model/shipment";
import { Dictionary } from "@reduxjs/toolkit";

interface Props {
  shipments: Dictionary<Shipment[]>
}

export default function Calendar({ shipments }: Props) {
  const { today, month, year, dateArray } = useAppSelector(
    (state) => state.calendar
  );

  const dispatch = useAppDispatch();
  const getDateArray = () => {
    dispatch(calendarActions.getDateArray());
  };
  const handleModal = () => {
    dispatch(modalActions.action());
  };

  useEffect(() => {
    getDateArray();
  }, [month, year]);

  return (
    <>
      <div className="calendar">
        <div className="calendar__head">
          <div className="calendar__head-left">
            <MonthChangeBtn month={month} year={year} />
          </div>
          <div className="calendar__head-right">
            <Button content="+" onClick={handleModal} />
            <DropdownMonth month={month} />
            <DropdownYear year={year} />
          </div>
        </div>
        <div className="calendar__date">
          <div
            className={
              dateArray[0].split(" ")[0] === "yes"
                ? "calendar__date-item"
                : "calendar__date-item__empty"
            }
          >
            <p className="calendar__date-day">SUN</p>
            <p
              className={
                month === today.split(" ")[1] &&
                year.toString() === today.split(" ")[2] &&
                dateArray[0].split(" ")[1] === today.split(" ")[0]
                  ? "calendar__date-today"
                  : "calendar__date-notToday"
              }
            >
              {dateArray[0].split(" ")[0] === "yes"
                ? dateArray[0].split(" ")[1]
                : ""}
            </p>
            <div className="calendar__date-shipmentCont">
              {Number(dateArray[0].split(" ")[1]) in shipments &&
                shipments[Number(dateArray[0].split(" ")[1])]!.map((item) => (
                  <Link
                    className="calendar__date-shipment"
                    key={item.id}
                    to={`/scheduler/shipment/${item.id}`}
                  >
                    {"[" + item.shipmentType + "] " + item.ref}
                  </Link>
                ))}
            </div>
          </div>
          <div
            className={
              dateArray[1].split(" ")[0] === "yes"
                ? "calendar__date-item"
                : "calendar__date-item__empty"
            }
          >
            <p className="calendar__date-day">MON</p>
            <p
              className={
                month === today.split(" ")[1] &&
                year.toString() === today.split(" ")[2] &&
                dateArray[1].split(" ")[1] === today.split(" ")[0]
                  ? "calendar__date-today"
                  : "calendar__date-notToday"
              }
            >
              {dateArray[1].split(" ")[0] === "yes"
                ? dateArray[1].split(" ")[1]
                : ""}
            </p>
            <div className="calendar__date-shipmentCont">
              {Number(dateArray[1].split(" ")[1]) in shipments &&
                shipments[Number(dateArray[1].split(" ")[1])]!.map((item) => (
                  <Link
                    className="calendar__date-shipment"
                    key={item.id}
                    to={`/scheduler/shipment/${item.id}`}
                  >
                    {"[" + item.shipmentType + "] " + item.ref}
                  </Link>
                ))}
            </div>
          </div>
          <div
            className={
              dateArray[2].split(" ")[0] === "yes"
                ? "calendar__date-item"
                : "calendar__date-item__empty"
            }
          >
            <p className="calendar__date-day">TUE</p>
            <p
              className={
                month === today.split(" ")[1] &&
                year.toString() === today.split(" ")[2] &&
                dateArray[2].split(" ")[1] === today.split(" ")[0]
                  ? "calendar__date-today"
                  : "calendar__date-notToday"
              }
            >
              {dateArray[2].split(" ")[0] === "yes"
                ? dateArray[2].split(" ")[1]
                : ""}
            </p>
            <div className="calendar__date-shipmentCont">
              {Number(dateArray[2].split(" ")[1]) in shipments &&
                shipments[Number(dateArray[2].split(" ")[1])]!.map((item) => (
                  <Link
                    className="calendar__date-shipment"
                    key={item.id}
                    to={`/scheduler/shipment/${item.id}`}
                  >
                    {"[" + item.shipmentType + "] " + item.ref}
                  </Link>
                ))}
            </div>
          </div>
          <div
            className={
              dateArray[3].split(" ")[0] === "yes"
                ? "calendar__date-item"
                : "calendar__date-item__empty"
            }
          >
            <p className="calendar__date-day">WED</p>
            <p
              className={
                month === today.split(" ")[1] &&
                year.toString() === today.split(" ")[2] &&
                dateArray[3].split(" ")[1] === today.split(" ")[0]
                  ? "calendar__date-today"
                  : "calendar__date-notToday"
              }
            >
              {dateArray[3].split(" ")[0] === "yes"
                ? dateArray[3].split(" ")[1]
                : ""}
            </p>
            <div className="calendar__date-shipmentCont">
              {Number(dateArray[3].split(" ")[1]) in shipments &&
                shipments[Number(dateArray[3].split(" ")[1])]!.map((item) => (
                  <Link
                    className="calendar__date-shipment"
                    key={item.id}
                    to={`/scheduler/shipment/${item.id}`}
                  >
                    {"[" + item.shipmentType + "] " + item.ref}
                  </Link>
                ))}
            </div>
          </div>
          <div
            className={
              dateArray[4].split(" ")[0] === "yes"
                ? "calendar__date-item"
                : "calendar__date-item__empty"
            }
          >
            <p className="calendar__date-day">THU</p>
            <p
              className={
                month === today.split(" ")[1] &&
                year.toString() === today.split(" ")[2] &&
                dateArray[4].split(" ")[1] === today.split(" ")[0]
                  ? "calendar__date-today"
                  : "calendar__date-notToday"
              }
            >
              {dateArray[4].split(" ")[0] === "yes"
                ? dateArray[4].split(" ")[1]
                : ""}
            </p>
            <div className="calendar__date-shipmentCont">
              {Number(dateArray[4].split(" ")[1]) in shipments &&
                shipments[Number(dateArray[4].split(" ")[1])]!.map((item) => (
                  <Link
                    className="calendar__date-shipment"
                    key={item.id}
                    to={`/scheduler/shipment/${item.id}`}
                  >
                    {"[" + item.shipmentType + "] " + item.ref}
                  </Link>
                ))}
            </div>
          </div>
          <div
            className={
              dateArray[5].split(" ")[0] === "yes"
                ? "calendar__date-item"
                : "calendar__date-item__empty"
            }
          >
            <p className="calendar__date-day">FRI</p>
            <p
              className={
                month === today.split(" ")[1] &&
                year.toString() === today.split(" ")[2] &&
                dateArray[5].split(" ")[1] === today.split(" ")[0]
                  ? "calendar__date-today"
                  : "calendar__date-notToday"
              }
            >
              {dateArray[5].split(" ")[0] === "yes"
                ? dateArray[5].split(" ")[1]
                : ""}
            </p>
            <div className="calendar__date-shipmentCont">
              {Number(dateArray[5].split(" ")[1]) in shipments &&
                shipments[Number(dateArray[5].split(" ")[1])]!.map((item) => (
                  <Link
                    className="calendar__date-shipment"
                    key={item.id}
                    to={`/scheduler/shipment/${item.id}`}
                  >
                    {"[" + item.shipmentType + "] " + item.ref}
                  </Link>
                ))}
            </div>
          </div>
          <div
            className={
              dateArray[6].split(" ")[0] === "yes"
                ? "calendar__date-item"
                : "calendar__date-item__empty"
            }
          >
            <p className="calendar__date-day">SAT</p>
            <p
              className={
                month === today.split(" ")[1] &&
                year.toString() === today.split(" ")[2] &&
                dateArray[6].split(" ")[1] === today.split(" ")[0]
                  ? "calendar__date-today"
                  : "calendar__date-notToday"
              }
            >
              {dateArray[6].split(" ")[0] === "yes"
                ? dateArray[6].split(" ")[1]
                : ""}
            </p>
            <div className="calendar__date-shipmentCont">
              {Number(dateArray[6].split(" ")[1]) in shipments &&
                shipments[Number(dateArray[6].split(" ")[1])]!.map((item) => (
                  <Link
                    className="calendar__date-shipment"
                    key={item.id}
                    to={`/scheduler/shipment/${item.id}`}
                  >
                    {"[" + item.shipmentType + "] " + item.ref}
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="calendar__date">
          {dateArray.slice(7, 14).map((date) => (
            <div className="calendar__date-item" key={date}>
              <p
                className={
                  month === today.split(" ")[1] &&
                  year.toString() === today.split(" ")[2] &&
                  date.split(" ")[1] === today.split(" ")[0]
                    ? "calendar__date-today"
                    : "calendar__date-notToday"
                }
              >
                {date.split(" ")[0] === "yes" ? date.split(" ")[1] : ""}
              </p>
              <div className="calendar__date-shipmentCont">
                {Number(date.split(" ")[1]) in shipments &&
                  shipments[Number(date.split(" ")[1])]!.map((item) => (
                    <Link
                      className="calendar__date-shipment"
                      key={item.id}
                      to={`/scheduler/shipment/${item.id}`}
                    >
                      {"[" + item.shipmentType + "] " + item.ref}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="calendar__date">
          {dateArray.slice(14, 21).map((date) => (
            <div className="calendar__date-item" key={date}>
              <p
                className={
                  month === today.split(" ")[1] &&
                  year.toString() === today.split(" ")[2] &&
                  date.split(" ")[1] === today.split(" ")[0]
                    ? "calendar__date-today"
                    : "calendar__date-notToday"
                }
              >
                {date.split(" ")[0] === "yes" ? date.split(" ")[1] : ""}
              </p>
              <div className="calendar__date-shipmentCont">
                {Number(date.split(" ")[1]) in shipments &&
                  shipments[Number(date.split(" ")[1])]!.map((item) => (
                    <Link
                      className="calendar__date-shipment"
                      key={item.id}
                      to={`/scheduler/shipment/${item.id}`}
                    >
                      {"[" + item.shipmentType + "] " + item.ref}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="calendar__date">
          {dateArray.slice(21, 28).map((date) => (
            <div className="calendar__date-item" key={date}>
              <p
                className={
                  month === today.split(" ")[1] &&
                  year.toString() === today.split(" ")[2] &&
                  date.split(" ")[1] === today.split(" ")[0]
                    ? "calendar__date-today"
                    : "calendar__date-notToday"
                }
              >
                {date.split(" ")[0] === "yes" ? date.split(" ")[1] : ""}
              </p>
              <div className="calendar__date-shipmentCont">
                {Number(date.split(" ")[1]) in shipments &&
                  shipments[Number(date.split(" ")[1])]!.map((item) => (
                    <Link
                      className="calendar__date-shipment"
                      key={item.id}
                      to={`/scheduler/shipment/${item.id}`}
                    >
                      {"[" + item.shipmentType + "] " + item.ref}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="calendar__date">
          {dateArray.slice(28, 35).map((date) => (
            <div
              className={
                date.split(" ")[0] === "yes"
                  ? "calendar__date-item"
                  : "calendar__date-item__empty"
              }
              key={date}
            >
              <p
                className={
                  month === today.split(" ")[1] &&
                  year.toString() === today.split(" ")[2] &&
                  date.split(" ")[1] === today.split(" ")[0]
                    ? "calendar__date-today"
                    : "calendar__date-notToday"
                }
              >
                {date.split(" ")[0] === "yes" ? date.split(" ")[1] : ""}
              </p>
              <div className="calendar__date-shipmentCont">
                {Number(date.split(" ")[1]) in shipments &&
                  shipments[Number(date.split(" ")[1])]!.map((item) => (
                    <Link
                      className="calendar__date-shipment"
                      key={item.id}
                      to={`/scheduler/shipment/${item.id}`}
                    >
                      {"[" + item.shipmentType + "] " + item.ref}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="calendar__date">
          {dateArray.slice(35, 42).map((date) => (
            <div
              className={
                date.split(" ")[0] === "yes"
                  ? "calendar__date-item"
                  : "calendar__date-item__empty"
              }
              key={date}
            >
              <p
                className={
                  month === today.split(" ")[1] &&
                  year.toString() === today.split(" ")[2] &&
                  date.split(" ")[1] === today.split(" ")[0]
                    ? "calendar__date-today"
                    : "calendar__date-notToday"
                }
              >
                {date.split(" ")[0] === "yes" ? date.split(" ")[1] : ""}
              </p>
              <div className="calendar__date-shipmentCont">
                {Number(date.split(" ")[1]) in shipments &&
                  shipments[Number(date.split(" ")[1])]!.map((item) => (
                    <Link
                      className="calendar__date-shipment"
                      key={item.id}
                      to={`/scheduler/shipment/${item.id}`}
                    >
                      {"[" + item.shipmentType + "] " + item.ref}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
