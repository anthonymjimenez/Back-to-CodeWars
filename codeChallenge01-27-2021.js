// https://www.codewars.com/kata/515bb423de843ea99400000a

function PaginationHelper(collection, itemsPerPage) {
    this.group = collection
    this.pageItems = itemsPerPage
  }
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function () {
    return this.group.length
  }
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function () {
    return Math.ceil(this.itemCount() / this.pageItems)
  }
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    let items = this.itemCount() - pageIndex * this.pageItems
    if (items > this.pageItems) {
      return this.pageItems
    } else if (items < 1) {
      return -1
    } else {
      return items
    }
  }
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function (itemIndex) {
    if (itemIndex > this.itemCount() || itemIndex < 0 || this.itemCount() === 0) {
      return -1
    } else if (itemIndex < this.pageItems) {
      return 0
    } else {
      return Math.floor(itemIndex / this.pageItems)
    }
  } 