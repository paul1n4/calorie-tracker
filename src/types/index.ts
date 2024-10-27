export type Category = {
  id: number,
  name: string
}

export type Activity = {
  id: string,
  category: number,
  activityName: string,
  calories: number
}