import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Color from "../Color/Color";
import ColorPalletHeader from "./ColorPalletHeader";
function ColorPallet({
  colorPallet,
  setColorPallet,
  palletName,
  setPalletName,
}) {
  const handleOnDragEnd = (result) => {
    const newItems = [...colorPallet];
    const draggedItem = newItems[result.source.index];
    newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, draggedItem);
    console.log(newItems);
    setColorPallet(newItems);
  };

  return (
    <section className="color-pallet">
      <ColorPalletHeader
        palletName={palletName}
        setPalletName={setPalletName}
      />
      <div className="color">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="colorPallet">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {colorPallet.map((color, index) => {
                  return (
                    <Draggable
                      key={color.index.toString()}
                      index={index}
                      draggableId={color.index.toString()}
                    >
                      {(provided) => (
                        <div
                          id={color.index.toString()}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Color
                            key={index}
                            {...color}
                            index={index}
                            hexColor={color.hexColor}
                            setColorPallet={setColorPallet}
                            colorPallet={colorPallet}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </section>
  );
}

export default ColorPallet;
