"use client";
import {
  ConfirmedStatus,
  CourseCondition,
  GoalDiff,
  RaceCourse,
  RaceInfoProps,
  RecordPanel,
} from "@/models";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePage } from "./hooks";
import { CardForm } from "./components";

export default function Home() {
  const handle = usePage();
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col text-black items-center justify-between w-screen h-screen bg-white">
        <div className="py-4 w-full flex flex-col items-center justify-center shadow-lg bg-green-600 ">
          <p className="text-white text-xl font-bold">
            着順掲示板ジェネレーター
          </p>
          <p className="text-white text-sm">racing results board generator</p>
        </div>

        {/* 着順掲示板フォーム */}
        <CardForm handle={handle} />

        <Link
          className="rounded-full bg-green-500 text-white px-5 py-2 shadow-lg shadow-green-300 mt-3 mb-4"
          href={`/${handle.generateURIParams()}`}
        >
          着順掲示板を生成する！
        </Link>
        <a
          className="rounded-full bg-black text-sm text-white px-5 py-2 shadow-lg shadow-black/50"
          href={`https://twitter.com/intent/tweet?text=${encodeURI(
            `${window.location.origin}/${handle.generateURIParams()}`
          )}&hashtags=着順掲示板ジェネレーター`}
        >
          着順掲示板を共有する
        </a>
        <div className="flex-grow" />
      </div>
      <div className="hidden sm:flex container mx-auto  items-center justify-center">
        <p className="text-white text-2xl">
          このページはスマートフォンでのみ閲覧可能です
        </p>
      </div>
    </div>
  );
}
