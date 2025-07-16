"use client";

import { getActivites } from "@/lib/actions";
import { fetchActivities } from "@/lib/data";
import { useEffect, useState } from "react";

interface ActvivityType {
  id: string;
  timestamp: Date;
  activity: "FAVORITED" | "WATCH_LATER";
  title: string;
}

export default function LatestActivities({
  date,
  activity,
}: {
  date?: string;
  activity?: string;
}) {
  const [activities, setActivities] = useState<ActvivityType[]>([]);
  useEffect(() => {
    getActivites(1, "isaactheedwards@gmail.com").then((data) => {
      console.log(data);
      setActivities(data);
    });
  }, []);
  return (
    <>
      <span className="font-bold text-atlas_blue-100 ">Latest Activites</span>
      <div className="flex flex-col space-y-1 p-2 ">
        {activities.map((activitiy) => (
          <div
            key={activitiy.id}
            className="flex flex-col text-left font-light text-xs my-2.5"
          >
            <span>{activitiy.activity}</span>
            <span>{activitiy.title}</span>
            <span className="hidden group-hover:block">
              {activitiy.timestamp.toString()}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
