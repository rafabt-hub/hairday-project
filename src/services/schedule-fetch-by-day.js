import dayjs from "dayjs";
import { apiConfig } from "./api-config.js"


export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch('${apiConfig.baseURL}/schedules')

    const data = await responde.json()

    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day")
    )

    return dailySchedules
  } catch (error) {
    console.log(error);
    alert("Nao foi possível buscar os agendamentos do dia selecionado.")
  }
}