"use client";

import Data from "@/assets/dummyData.json";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import {
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiBoxList, CiEdit, CiFlag1, CiGrid41 } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [display, setDisplay] = useState("grid");

  const detailsToggler = (e) => {
    setShowDetails(!showDetails);
  };
  return (
    <section>
      <header className="h-[65vh] bg-hero bg-cover flex items-center justify-center flex-col text-white">
        <h1 className="text-4xl font-bold font-Nunito">Students Details</h1>
      </header>
      <main className="w-[80%] mx-auto">
        <div className="flex py-20 flex-col gap-10">
          <h1 className="font-bold font-Nunito text-4xl text-center">
            Students List
          </h1>
          <div className="hidden md:flex items-center gap-3">
            <p>Display: </p>
            <div className="flex items-center gap-2">
              <span
                className="flex items-center gap-1 select-none"
                onClick={() => setDisplay("grid")}
              >
                <CiGrid41 /> Grid
              </span>
              <span
                className="flex items-center gap-1 select-none"
                onClick={() => setDisplay("tiles")}
              >
                <CiBoxList /> Tiles
              </span>
            </div>
          </div>
          <article
            className={`${
              display === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                : "flex flex-col gap-5"
            }`}
          >
            {Data &&
              Data.map((student) => {
                return (
                  <div key={student.id}>
                    {display === "grid" ? (
                      <div
                        key={student.id}
                        className="flex flex-col items-center py-8 rounded-md gap-2 shadow-main relative"
                      >
                        <Image
                          src={student.profilePicture}
                          width={80}
                          height={120}
                          alt={student.profilePicture}
                          className="rounded-full"
                        />
                        <h1 className="font-Nunito">{`${student.firstName} ${student.lastName}`}</h1>
                        <p className="bg-secondary  rounded-md px-3 p-1">
                          {student.courses.courseName}
                        </p>
                        <p className="text-center w-[80%] text-black/60">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsum natus dolores aut maiores magni eius.
                        </p>
                        <AlertDialog>
                          <AlertDialogTrigger className="bg-primary px-4 py-2 rounded text-primary-foreground">
                            View Profile
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                <div className="absolute right-6 top-5 cursor-pointer p-1">
                                  <span
                                    className="text-lg"
                                    onClick={detailsToggler}
                                  >
                                    {showDetails ? (
                                      <FaXmark />
                                    ) : (
                                      <BsThreeDotsVertical />
                                    )}
                                  </span>
                                  {showDetails && (
                                    <div className="absolute flex flex-col shadow bg-white right-[100%] top-0 py-2 text-center gap-2">
                                      <Link
                                        href={"#"}
                                        className="flex items-center gap-1 hover:bg-secondary px-3 py-1 text-center"
                                      >
                                        {" "}
                                        <CiEdit /> Edit
                                      </Link>
                                      <Link
                                        href={"#"}
                                        className="flex items-center gap-1 hover:bg-secondary px-3 py-1 text-center"
                                      >
                                        <CiFlag1 />
                                        Flag
                                      </Link>
                                      <Link
                                        href={"#"}
                                        className="flex items-center gap-1 hover:bg-secondary px-3 py-1 text-center"
                                      >
                                        <IoTrashBin />
                                        Delete
                                      </Link>
                                    </div>
                                  )}
                                </div>
                                <div className="flex items-center gap-5">
                                  <Image
                                    src={student.profilePicture}
                                    width={80}
                                    height={120}
                                    alt={student.profilePicture}
                                    className="rounded-full"
                                  />
                                  <div>
                                    <h1 className="font-bold text-2xl font-Nunito">{`${student.firstName} ${student.lastName}`}</h1>
                                    <p>{student.email}</p>
                                    <p>{student.phone}</p>
                                  </div>
                                </div>
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                <div className="py-3 flex flex-col gap-3">
                                  <h1 className="text-xl font-Nunito font-semibold">
                                    Personal Details
                                  </h1>
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-5">
                                      <p className="font-semibold">Address:</p>
                                      <p>
                                        {student.address.street}
                                        {student.address.city}
                                        {student.address.state}
                                      </p>
                                    </div>
                                    <div className="flex items-center gap-5">
                                      <p className="font-semibold">
                                        Date of Birth:
                                      </p>
                                      <p>{student.dateOfBirth}</p>
                                    </div>
                                    <div className="flex items-center gap-5">
                                      <p className="font-semibold">Course:</p>
                                      <p>
                                        {student.courses.courseId}
                                        {student.courses.courseName}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogAction>Close</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    ) : (
                      <div
                        key={student.id}
                        className="flex flex-col md:flex-row px-10 items-center py-8 rounded-md gap-7 shadow-main relative"
                      >
                        <Image
                          src={student.profilePicture}
                          width={80}
                          height={120}
                          alt={student.profilePicture}
                          className="rounded-full"
                        />
                        <div className="flex flex-col justify-start items-center md:items-start gap-2">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">Name: </p>
                            <h1 className="font-Nunito">{`${student.firstName} ${student.lastName}`}</h1>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">Email: </p>
                            <p>{student.email}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">Course: </p>
                            <p>{student.courses.courseName}</p>
                          </div>
                          <AlertDialog>
                            <AlertDialogTrigger className="bg-primary px-4 py-2 rounded text-primary-foreground">
                              View Profile
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  <div className="absolute right-6 top-5 cursor-pointer p-1">
                                    <span
                                      className="text-lg"
                                      onClick={detailsToggler}
                                    >
                                      {showDetails ? (
                                        <FaXmark />
                                      ) : (
                                        <BsThreeDotsVertical />
                                      )}
                                    </span>
                                    {showDetails && (
                                      <div className="absolute flex flex-col shadow bg-white right-[100%] top-0 py-2 text-center gap-2">
                                        <Link
                                          href={"#"}
                                          className="flex items-center gap-1 hover:bg-secondary px-3 py-1 text-center"
                                        >
                                          {" "}
                                          <CiEdit /> Edit
                                        </Link>
                                        <Link
                                          href={"#"}
                                          className="flex items-center gap-1 hover:bg-secondary px-3 py-1 text-center"
                                        >
                                          <CiFlag1 />
                                          Flag
                                        </Link>
                                        <Link
                                          href={"#"}
                                          className="flex items-center gap-1 hover:bg-secondary px-3 py-1 text-center"
                                        >
                                          <IoTrashBin />
                                          Delete
                                        </Link>
                                      </div>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-5">
                                    <Image
                                      src={student.profilePicture}
                                      width={80}
                                      height={120}
                                      alt={student.profilePicture}
                                      className="rounded-full"
                                    />
                                    <div>
                                      <h1 className="font-bold text-2xl font-Nunito">{`${student.firstName} ${student.lastName}`}</h1>
                                      <p>{student.email}</p>
                                      <p>{student.phone}</p>
                                    </div>
                                  </div>
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  <div className="py-3 flex flex-col gap-3">
                                    <h1 className="text-xl font-Nunito font-semibold">
                                      Personal Details
                                    </h1>
                                    <div className="flex flex-col gap-1">
                                      <div className="flex items-center gap-5">
                                        <p className="font-semibold">
                                          Address:
                                        </p>
                                        <p>
                                          {student.address.street}
                                          {student.address.city}
                                          {student.address.state}
                                        </p>
                                      </div>
                                      <div className="flex items-center gap-5">
                                        <p className="font-semibold">
                                          Date of Birth:
                                        </p>
                                        <p>{student.dateOfBirth}</p>
                                      </div>
                                      <div className="flex items-center gap-5">
                                        <p className="font-semibold">Course:</p>
                                        <p>
                                          {student.courses.courseId}
                                          {student.courses.courseName}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogAction>Close</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </article>
        </div>
      </main>
    </section>
  );
};

export default Home;
