import schedule from "../../css/main/main_schedule.module.css";
import Day from "../main/main_schedule_day";
import { Button } from "react-bootstrap";

function Schedule() {
  return (
    <div>
      <div className={schedule.table_top}>My Schedule</div>

      <div className={schedule.table_total}>
        <Button className={schedule.plus}> 일정 추가 </Button>
        <div className={schedule.total}>
          <div className={schedule.time_total}>
            <div className={schedule.time_top}></div>
            <div className={schedule.time_box_first}>
              <div className={schedule.time}>9:00 AM</div>
            </div>
            <div className={schedule.time_box}>
              <div className={schedule.time}>10:00 AM</div>
            </div>
            <div className={schedule.time_box}>
              <div className={schedule.time}>11:00 AM</div>
            </div>
            <div className={schedule.time_box}>
              <div className={schedule.time}>12:00 AM</div>
            </div>
            <div className={schedule.time_box}>
              <div className={schedule.time}>1:00 PM</div>
            </div>
            <div className={schedule.time_box}>
              <div className={schedule.time}>2:00 PM</div>
            </div>
            <div className={schedule.time_box}>
              <div className={schedule.time}>3:00 PM</div>
            </div>
            <div className={schedule.time_box}>
              <div className={schedule.time}>4:00 PM</div>
            </div>
            <div className={schedule.time_box}>
              <div className={schedule.time}>5:00 PM</div>
            </div>
            <div className={schedule.time_box}>
              <div className={schedule.time}>6:00 PM</div>
            </div>
            <div className={schedule.time_box}>
              <div className={schedule.time}>7:00 PM</div>
            </div>
            <div className={schedule.time_box}>
              <div className={schedule.time}>8:00 PM</div>
            </div>
            <div className={schedule.time_box}>
              <div className={schedule.time}>9:00 PM</div>
            </div>
            <div className={schedule.time_box}>
              <div className={schedule.time}>10:00 PM</div>
            </div>
            <div className={schedule.time_box_last}>
              <div className={schedule.time}>11:00 PM</div>
            </div>
          </div>
          <div className={schedule.schedule_day}>
            <div className={schedule.schedule_top}>Sun</div>
            <Day />
          </div>
          <div className={schedule.schedule_day}>
            <div className={schedule.schedule_top}>Mon</div>
            <Day />
          </div>
          <div className={schedule.schedule_day}>
            <div className={schedule.schedule_top}>Tue</div>
            <Day />
          </div>
          <div className={schedule.schedule_day}>
            <div className={schedule.schedule_top}>Wed</div>
            <Day />
          </div>
          <div className={schedule.schedule_day}>
            <div className={schedule.schedule_top}>Thu</div>
            <Day />
          </div>
          <div className={schedule.schedule_day}>
            <div className={schedule.schedule_top}>Fri</div>
            <Day />
          </div>
          <div className={schedule.schedule_day}>
            <div className={schedule.schedule_top}>Sat</div>
            <Day />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
