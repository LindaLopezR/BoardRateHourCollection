import { Mongo } from 'meteor/mongo';

class BoardRateHourCollection extends Mongo.Collection {

}

export const BoardRateHour = new BoardRateHourCollection('boardRateHour');
BoardRateHour.attachBehaviour('timestampable');
