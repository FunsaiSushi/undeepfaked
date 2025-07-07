"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

const UploadWidget = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);

    // Create preview for images and videos
    if (
      selectedFile.type.startsWith("image/") ||
      selectedFile.type.startsWith("video/")
    ) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "video/*": [],
      "audio/*": [],
    },
    maxFiles: 1,
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-xl p-8
          transition-colors duration-200 ease-in-out
          ${
            isDragActive
              ? "border-primary bg-primary/5"
              : "border-gray-300 hover:border-primary/50"
          }
        `}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-4">
          {preview ? (
            file?.type.startsWith("image/") ? (
              <Image
                src={preview}
                alt="Preview"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            ) : file?.type.startsWith("video/") ? (
              <video
                src={preview}
                controls
                className="rounded-lg max-w-full h-auto"
              />
            ) : null
          ) : (
            <>
              <Image
                src="/file.svg"
                alt="Upload"
                width={64}
                height={64}
                className="opacity-50"
              />
              <div className="text-center">
                <p className="text-lg font-medium text-gray-700">
                  {isDragActive
                    ? "Drop your file here"
                    : "Drag & drop your file here"}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  or click to select a file
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Supports images, videos, and audio files
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      {file && (
        <div className="mt-4 flex justify-center">
          <button
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => {
              // Handle upload here
              console.log("Uploading file:", file);
            }}
          >
            Process File
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadWidget;
