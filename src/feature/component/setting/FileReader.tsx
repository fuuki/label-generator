import React, { ChangeEvent } from "react";
import parse from "csv-parse/lib/sync";
import { useDispatch } from "react-redux";
import { setContents } from "feature/dataSlice";

const FiileReader = () => {
  const dispatch = useDispatch()

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (!file) return;
    const fileText = await readFileAsText(file)
    const csvData: string[][] = parse(fileText, { columns: false })
    dispatch(setContents(csvData))
  }

  return (
    <input
      type="file"
      onChange={handleInputChange}
    />
  )
}

function readFileAsText(file: Blob): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string) || '');
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

export default FiileReader;
