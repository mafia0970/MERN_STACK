import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Form = ({
  formcontrols,
  formData,
  setFormdata,
  onSubmit,
  ButtonText,
}) => {
  const renderinputbycomponenttype = (controlitem) => {
    const value = formData[controlitem.name] || "";
    let element = null;
    switch (controlitem.ComponentType) {
      case "input":
        element = (
          <Input
            value={value}
            name={controlitem.name}
            placeholder={controlitem.placeholder}
            type={controlitem.type}
            id={controlitem.name}
            required={controlitem.required}
            onChange={(e) =>
              setFormdata({
                ...formData,
                [controlitem.name]: e.target.value,
              })
            }
          />
        );
        break;
      case "select":
        element = (
          <Select
            required={controlitem.required}
            value={value}
            onValueChange={(value) =>
              setFormdata({
                ...formData,
                [controlitem.name]: value,
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={controlitem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {controlitem.options && controlitem.options.length > 0
                ? controlitem.options.map((option, index) => (
                    <SelectItem key={option.id} value={index}>
                      {option.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            required={controlitem.required}
            name={controlitem.name}
            placeholder={controlitem.placeholder}
            id={controlitem.id}
            value={value}
          />
        );
        break;

      default:
        element = (
          <Input
            value={value}
            required={controlitem.required}
            name={controlitem.name}
            placeholder={controlitem.placeholder}
            type={controlitem.type}
            id={controlitem.name}
            onChange={(e) =>
              setFormdata({
                ...formData,
                [controlitem.name]: e.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formcontrols.map((controlitem, index) => {
          return (
            <div className="grid w-full gap-1.5" key={index}>
              <label htmlFor={controlitem.id} className="mb-1">
                {controlitem.label}
              </label>
              {renderinputbycomponenttype(controlitem)}
            </div>
          );
        })}
      </div>
      <Button className="mt-2 w-full" type="submit">
        {ButtonText || "Submit"}
      </Button>
    </form>
  );
};

export default Form;
