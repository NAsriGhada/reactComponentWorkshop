import React from 'react'

const Categories = () => {
  return (
    <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-around', marginTop:'5%'}}>
        <div class="card mb-3" style={{maxWwidth: "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://r-xx.bstatic.com/xdata/images/city/300x240/681808.jpg?k=685639dc390fe33fed4b58898a50d839dbac7e4ab0dd1907f03bb1f9eb8b838f&o=" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Stays</h5>
                  <p class="card-text">Homes, boutique hotels & more.</p>
                </div>
              </div>
            </div>
          </div>
        <div class="card mb-3" style={{maxWwidth: "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/f43b42664bbf44f174b44c64fd71440b4af56888.jpg" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Experiences</h5>
                  <p class="card-text">Activities hosted by locals</p>
                </div>
              </div>
            </div>
          </div>
        <div class="card mb-3" style={{maxWwidth: "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://cf.bstatic.com/static/img/communities/communities-index/photo-300x300/592ac5a7bbd5433c1aba6f1afdea794e572c9a69.png" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Advenures</h5>
                  <p class="card-text">Hosted trips including Lodging</p>
                </div>
              </div>
            </div>
          </div>
        <div class="card mb-3" style={{maxWwidth: "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x320/169309623.jpg?k=e7487967c68cae8cf154b87e809c6b5af28baef2604b31bb5daa0b4f61bdc0be&o=" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Restaurants</h5>
                  <p class="card-text">Popular spots to eat & drink</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Categories