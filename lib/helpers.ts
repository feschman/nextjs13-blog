import readingTime from "reading-time"
import {DateTime} from "luxon";

export const getReadingTime = (text:string, locale:string) =>{
  // return readingTime(text).text;
  const minutes = readingTime(text).minutes;
  const minutesRounded = Math.floor(minutes);
  if(locale === "de"){
    if(minutesRounded  === 1){
      return "1 Minute";
    }else return  `${minutesRounded} Minuten`;
  }else{
    if(minutesRounded  === 1){
      return "1 minute";
    }else return `${minutesRounded} minutes`;
  }
};
export const getRelativeDate = (date:string, locale:string) =>{
  return DateTime.fromISO(date).setLocale(locale).toRelative();
}
