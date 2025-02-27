import { describe,it,expect } from 'vitest';


class Day {
  constructor(public name: string) {}


}

class OpeningDay {
  days: Day[] = [];
  constructor(...days: Day[]) {
    this.days = days;

  }

  isOpen() {
    return !this.days.some(day => day.name === 'saturday' || day.name === 'sunday');
  }
}

class Hour {
  constructor(readonly hour: number,  readonly minute: number) {}
}

class OpeningHours {
  constructor(readonly beginHour: Hour, readonly endHour: Hour) {
  }

  isOpen(hour: Hour):boolean {
    if ((hour.hour >= this.beginHour.hour && hour.minute >= this.beginHour.minute) && (hour.hour < this.endHour.hour )) {
      return true;
    }
    return false;
  }
}

describe('OpeningDays', () => {
  describe('Day', () => {
    it('should be open on week ', () => {
      //Given
      const openingDays = new OpeningDay(new Day('monday'), new Day('tuesday'), new Day('wednesday'), new Day('thursday'), new Day('friday'));
      //When
      const isOpen = openingDays.isOpen();

      //Then
      expect(isOpen).toBe(true);
    });
    it('should be closed on weekend ', () => {
      //Given
      const openingDays = new OpeningDay(new Day('saturday'), new Day('sunday'));
      //When
      const isOpen = openingDays.isOpen();

      //Then
      expect(isOpen).toBe(false);
    });
  });
  describe('Hour', () => {
    it('should be open at 10:00', () => {
      //Given
      const openingHours = new OpeningHours(new Hour(10, 0), new Hour(12, 0));
      //When
      const isOpen = openingHours.isOpen(new Hour(10, 0));

      //Then
      expect(isOpen).toBe(true);
    });

    it('should be closed at 12:00', () => {
      //Given
      const openingHours = new OpeningHours(new Hour(10, 0), new Hour(12, 0));
      //When
      const isOpen = openingHours.isOpen(new Hour(12, 0));

      //Then
      expect(isOpen).toBe(false);
    });

    it('should be open at 13h30 ', () => {
      //Given
      const openingHours = new OpeningHours(new Hour(13, 0), new Hour(18, 0));
      //When
      const isOpen = openingHours.isOpen(new Hour(13, 30));

      //Then
      expect(isOpen).toBe(true);

    });
  });

  describe('Opening days', () => {
    it('should be filter hour OpeningDays', () => {
      //Given
      const openingDays = new OpeningDay(new Day('monday'), new Day('tuesday'), new Day('wednesday'), new Day('thursday'), new Day('friday'));



    });
  });
});


