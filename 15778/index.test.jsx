
import React from 'react';
import { expect, test } from '@jest/globals';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const app = <DragDropContext onDragEnd={() => {}}>
  <div>
    <Droppable droppableId="droppable">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Draggable draggableId="draggable" index={0}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                Draggable Item
              </div>
            )}
          </Draggable>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
</DragDropContext>;

test('renders DragDropContext with Droppable and Draggable', () => {
    expect(app).toBeDefined();
});
