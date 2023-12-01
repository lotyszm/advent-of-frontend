export class GiftRegistry {
  gifts: Map<number, string[]> = new Map();

  addGift = (listId: number, giftName: string) => {
    this.gifts.set(listId, [...(this.gifts.get(listId) || []), giftName]);
  };

  removeGift = (listId: number, giftName: string) => {
    const giftList = this.getGiftsForChild(listId);
    const gift = giftList.indexOf(giftName);
    if (gift === -1) {
      throw new Error("Gift not found");
    }
    giftList.splice(gift, 1);
    this.gifts.set(listId, giftList);
  };

  getGiftsForChild = (listId: number): string[] => {
    return this.gifts.get(listId) || [];
  };
}
