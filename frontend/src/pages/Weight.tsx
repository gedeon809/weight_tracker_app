import React, { useState } from "react";
import TextInput from "../components/Input";
import { GiWeightLiftingUp } from "react-icons/gi";
import Button from "../components/Button";
import { CiEdit } from "react-icons/ci";
import {
  useGetAllWeightQuery,
  useAddWeightMutation,
  useUpdateWeightMutation,
  useDeleteWeightMutation,
} from "../redux/services/weight";
import { Drawer } from "rsuite";

interface WeightProps {
  weight: string;
  date: string;
}

function Weight() {
  const [weight, setWeight] = useState("");
  const [open, setOpen] = React.useState(false);
  const { data: weights = [], isFetching, } = useGetAllWeightQuery("");
  const [addWeight, { isLoading: isAdding }] = useAddWeightMutation();
  const [updateWeight, { isLoading: isUpdating }] = useUpdateWeightMutation();
  const [deleteWeight, { isLoading: isDeleting }] = useDeleteWeightMutation();

  const [weightToMaintain, setWeightToMaintain] = useState<WeightProps>({
    weight: "",
    date: "",
  });

  const handleAdd = async() => {
    if (isAdding) return;
   await addWeight({  weight: Number(weight) });
    setWeight("");
  };
  const handleInputValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): any => {
    setWeight(e.target.value);
  };
  const handleUpdate = async(id: number) => {
    const weightToUpdate = await weights.find(
      (weight: { id: number; date: any }) => weight.id === id
    );
    console.log(weightToUpdate);
    if (weightToUpdate) {
     await updateWeight({ id, weight: Number(weight) });
    }
  };

  const handleDelete =async(id: number) => {
    await deleteWeight({ id });
    

  };

  const handleOpenDrawer = (weight: any) => {
    setWeightToMaintain(weight);
    setOpen(true);
  };

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center">
        <TextInput
          type="text"
          name="weight"
          placeholder="Weight"
          icon={<GiWeightLiftingUp className="text-gray-400 m-2" />}
          value={weight}
          onChange={handleInputValueChange}
        />
        <div className="mr-10" />
        <Button title="Add Weight" onClick={handleAdd} />
      </div>

      <table className="border-collapse border border-slate-400 w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 ...">Date</th>
            <th className="border border-slate-300 ...">Weight</th>
            <th className="border border-slate-300 ...">Actions</th>
          </tr>
        </thead>
        <tbody>
          {weights.map((weight: any) => (
            <tr key={weight.id}>
              <td className="border border-slate-300 ...">{weight.date}</td>
              <td className="border border-slate-300 ...">{weight.weight}</td>
              <td className="border border-slate-300 ...">
                <div className="flex items-center center gap-3 w-full ">
                  <CiEdit
                    onClick={() => handleOpenDrawer(weight)}
                    className="cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Drawer open={open} onClose={() => setOpen(false)} placement="right">
        <Drawer.Body>
          <p className="mb-10">Maintain your weight</p>

          <TextInput
            type="number"
            name="weight"
            placeholder="Weight"
            icon={<GiWeightLiftingUp className="text-gray-400 m-2" />}
            value={weightToMaintain.weight}
            onChange={(e) =>
              setWeightToMaintain({
                ...weightToMaintain,
                weight: e.target.value,
              })
            }
          />

          <div className="flex items-center justify-between mt-10">
            <Button title="Update" onClick={() => handleUpdate} />

            <Button title="Delete" onClick={() => handleDelete} />
          </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
}

export default Weight;
