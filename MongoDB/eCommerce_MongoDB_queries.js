// ==========================
// eCommerce MongoDB Queries
// ==========================

use("eCommerceDB");

print("\n===============================");
print(" eCommerce MongoDB Queries Log ");
print("===============================\n");

// ---------- i) Insert One ----------
print("\n[Query i] Insert one document of nested levels");
db.ecommerce.insertOne({
  "customerID": "CUST0026",
  "personalInfo": {
    "name": {
      "firstName": "Prady_26",
      "lastName": "Mohta_26"
    },
    "contact": {
      "email": "prady26@example.com",
      "phone": "261-555-3329",
      "address": {
        "street": "220 Guliford Road",
        "city": "Bethesda",
        "state": "NY",
        "zipCode": "38855",
        "country": "USA",
        "deliveryDetails": {
          "instructions": "Leave at front door",
          "timePreferences": {
            "weekdays": "Afternoon",
            "weekends": "Morning",
            "specialInstructions": {
              "ifNotHome": "Leave with neighbor",
              "neighborDetails": {
                "name": "Manav Gupta",
                "contactNumber": "333-444-5555",
                "address": "4321 Hartwick Road"
              }
            }
          }
        }
      }
    }
  },
  "viewedProducts": [
    {
      "category": "Books",
      "subCategory": "Subcategory 1",
      "items": [
        {
          "name": "Product 1",
          "brand": "Brand 1",
          "details": {
            "model": "Model 1",
            "specs": {
              "price": 364,
              "features": {
                "dimension": "13 inches",
                "weight": "4 kg",
                "extras": {
                  "warranty": "1 year",
                  "color": "Silver"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "wishlist": [
    {
      "category": "Clothing",
      "subCategory": "Subcategory 1",
      "items": [
        {
          "name": "Product 1",
          "brand": "Brand 1",
          "details": {
            "model": "Model 1",
            "specs": {
              "price": 211,
              "features": {
                "dimension": "12 inches",
                "weight": "3 kg",
                "extras": {
                  "warranty": "1 year",
                  "color": "Silver"
                }
              }
            }
          }
        }
      ]
    },
    {
      "category": "Electronics",
      "subCategory": "Subcategory 2",
      "items": [
        {
          "name": "Product 2",
          "brand": "Brand 2",
          "details": {
            "model": "Model 2",
            "specs": {
              "price": 374,
              "features": {
                "dimension": "7 inches",
                "weight": "4 kg",
                "extras": {
                  "warranty": "1 year",
                  "color": "Silver"
                }
              }
            }
          }
        }
      ]
    },
    {
      "category": "Books",
      "subCategory": "Subcategory 3",
      "items": [
        {
          "name": "Product 3",
          "brand": "Brand 3",
          "details": {
            "model": "Model 3",
            "specs": {
              "price": 271,
              "features": {
                "dimension": "14 inches",
                "weight": "5 kg",
                "extras": {
                  "warranty": "1 year",
                  "color": "Silver"
                }
              }
            }
          }
        }
      ]
    },
    {
      "category": "Footwear",
      "subCategory": "Subcategory 4",
      "items": [
        {
          "name": "Product 4",
          "brand": "Brand 4",
          "details": {
            "model": "Model 4",
            "specs": {
              "price": 771,
              "features": {
                "dimension": "15 inches",
                "weight": "3 kg",
                "extras": {
                  "warranty": "1 year",
                  "color": "White"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "cart": {
    "items": [
      {
        "category": "Footwear",
        "subCategory": "Subcategory 1",
        "items": [
          {
            "name": "Product 1",
            "brand": "Brand 1",
            "details": {
              "model": "Model 1",
              "specs": {
                "price": 578,
                "features": {
                  "dimension": "5 inches",
                  "weight": "4 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "Silver"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "category": "Books",
        "subCategory": "Subcategory 2",
        "items": [
          {
            "name": "Product 2",
            "brand": "Brand 2",
            "details": {
              "model": "Model 2",
              "specs": {
                "price": 258,
                "features": {
                  "dimension": "8 inches",
                  "weight": "4 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "White"
                  }
                }
              }
            }
          }
        ]
      }
    ]
  },
  "orderHistory": [
    {
      "orderId": "ORD6488",
      "orderDate": "2023-01-17",
      "products": [
        {
          "category": "Clothing",
          "subCategory": "Subcategory 1",
          "items": [
            {
              "name": "Product 1",
              "brand": "Brand 1",
              "details": {
                "model": "Model 1",
                "specs": {
                  "price": 68,
                  "features": {
                    "dimension": "12 inches",
                    "weight": "1 kg",
                    "extras": {
                      "warranty": "1 year",
                      "color": "Black"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "category": "Clothing",
          "subCategory": "Subcategory 2",
          "items": [
            {
              "name": "Product 2",
              "brand": "Brand 2",
              "details": {
                "model": "Model 2",
                "specs": {
                  "price": 128,
                  "features": {
                    "dimension": "10 inches",
                    "weight": "2 kg",
                    "extras": {
                      "warranty": "1 year",
                      "color": "Black"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "totalPrice": 650
    },
    {
      "orderId": "ORD2278",
      "orderDate": "2023-01-25",
      "products": [
        {
          "category": "Electronics",
          "subCategory": "Subcategory 1",
          "items": [
            {
              "name": "Product 1",
              "brand": "Brand 1",
              "details": {
                "model": "Model 1",
                "specs": {
                  "price": 455,
                  "features": {
                    "dimension": "7 inches",
                    "weight": "4 kg",
                    "extras": {
                      "warranty": "1 year",
                      "color": "White"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "category": "Books",
          "subCategory": "Subcategory 2",
          "items": [
            {
              "name": "Product 2",
              "brand": "Brand 2",
              "details": {
                "model": "Model 2",
                "specs": {
                  "price": 817,
                  "features": {
                    "dimension": "5 inches",
                    "weight": "4 kg",
                    "extras": {
                      "warranty": "1 year",
                      "color": "White"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "totalPrice": 274
    }
  ]
});
print("✅ InsertOne completed.");

// ---------- ii) Insert Many ----------
print("\n[Query ii] Insert multiple documents of nested levels");
db.ecommerce.insertMany([
  {
    "customerID": "CUST0027",
    "personalInfo": {
      "name": {
        "firstName": "Prady_27",
        "lastName": "Mohta_27"
      },
      "contact": {
        "email": "prady27@example.com",
        "phone": "680-555-4671",
        "address": {
          "street": "916 Guliford Road",
          "city": "Rock Ville",
          "state": "VA",
          "zipCode": "34790",
          "country": "USA",
          "deliveryDetails": {
            "instructions": "Leave at front door",
            "timePreferences": {
              "weekdays": "Afternoon",
              "weekends": "Morning",
              "specialInstructions": {
                "ifNotHome": "Leave with neighbor",
                "neighborDetails": {
                  "name": "Manav Gupta",
                  "contactNumber": "333-444-5555",
                  "address": "4321 Hartwick Road"
                }
              }
            }
          }
        }
      }
    },
    "viewedProducts": [
      {
        "category": "Books",
        "subCategory": "Subcategory 1",
        "items": [
          {
            "name": "Product 1",
            "brand": "Brand 1",
            "details": {
              "model": "Model 1",
              "specs": {
                "price": 575,
                "features": {
                  "dimension": "5 inches",
                  "weight": "4 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "Black"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "category": "Clothing",
        "subCategory": "Subcategory 2",
        "items": [
          {
            "name": "Product 2",
            "brand": "Brand 2",
            "details": {
              "model": "Model 2",
              "specs": {
                "price": 668,
                "features": {
                  "dimension": "6 inches",
                  "weight": "4 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "Black"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "category": "Clothing",
        "subCategory": "Subcategory 3",
        "items": [
          {
            "name": "Product 3",
            "brand": "Brand 3",
            "details": {
              "model": "Model 3",
              "specs": {
                "price": 758,
                "features": {
                  "dimension": "15 inches",
                  "weight": "2 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "Silver"
                  }
                }
              }
            }
          }
        ]
      }
    ],
    "wishlist": [
      {
        "category": "Books",
        "subCategory": "Subcategory 1",
        "items": [
          {
            "name": "Product 1",
            "brand": "Brand 1",
            "details": {
              "model": "Model 1",
              "specs": {
                "price": 947,
                "features": {
                  "dimension": "9 inches",
                  "weight": "3 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "White"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "category": "Clothing",
        "subCategory": "Subcategory 2",
        "items": [
          {
            "name": "Product 2",
            "brand": "Brand 2",
            "details": {
              "model": "Model 2",
              "specs": {
                "price": 822,
                "features": {
                  "dimension": "7 inches",
                  "weight": "1 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "White"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "category": "Books",
        "subCategory": "Subcategory 3",
        "items": [
          {
            "name": "Product 3",
            "brand": "Brand 3",
            "details": {
              "model": "Model 3",
              "specs": {
                "price": 492,
                "features": {
                  "dimension": "6 inches",
                  "weight": "1 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "Silver"
                  }
                }
              }
            }
          }
        ]
      }
    ],
    "cart": {
      "items": [
        {
          "category": "Home Appliances",
          "subCategory": "Subcategory 1",
          "items": [
            {
              "name": "Product 1",
              "brand": "Brand 1",
              "details": {
                "model": "Model 1",
                "specs": {
                  "price": 763,
                  "features": {
                    "dimension": "5 inches",
                    "weight": "2 kg",
                    "extras": {
                      "warranty": "1 year",
                      "color": "Silver"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "category": "Books",
          "subCategory": "Subcategory 2",
          "items": [
            {
              "name": "Product 2",
              "brand": "Brand 2",
              "details": {
                "model": "Model 2",
                "specs": {
                  "price": 894,
                  "features": {
                    "dimension": "9 inches",
                    "weight": "4 kg",
                    "extras": {
                      "warranty": "1 year",
                      "color": "White"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "category": "Home Appliances",
          "subCategory": "Subcategory 3",
          "items": [
            {
              "name": "Product 3",
              "brand": "Brand 3",
              "details": {
                "model": "Model 3",
                "specs": {
                  "price": 77,
                  "features": {
                    "dimension": "12 inches",
                    "weight": "2 kg",
                    "extras": {
                      "warranty": "1 year",
                      "color": "White"
                    }
                  }
                }
              }
            }
          ]
        }
      ]
    },
    "orderHistory": [
      {
        "orderId": "ORD7787",
        "orderDate": "2023-03-23",
        "products": [
          {
            "category": "Home Appliances",
            "subCategory": "Subcategory 1",
            "items": [
              {
                "name": "Product 1",
                "brand": "Brand 1",
                "details": {
                  "model": "Model 1",
                  "specs": {
                    "price": 875,
                    "features": {
                      "dimension": "7 inches",
                      "weight": "3 kg",
                      "extras": {
                        "warranty": "1 year",
                        "color": "White"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "category": "Clothing",
            "subCategory": "Subcategory 2",
            "items": [
              {
                "name": "Product 2",
                "brand": "Brand 2",
                "details": {
                  "model": "Model 2",
                  "specs": {
                    "price": 958,
                    "features": {
                      "dimension": "9 inches",
                      "weight": "5 kg",
                      "extras": {
                        "warranty": "1 year",
                        "color": "Silver"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "category": "Electronics",
            "subCategory": "Subcategory 3",
            "items": [
              {
                "name": "Product 3",
                "brand": "Brand 3",
                "details": {
                  "model": "Model 3",
                  "specs": {
                    "price": 299,
                    "features": {
                      "dimension": "13 inches",
                      "weight": "4 kg",
                      "extras": {
                        "warranty": "1 year",
                        "color": "Silver"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "category": "Books",
            "subCategory": "Subcategory 4",
            "items": [
              {
                "name": "Product 4",
                "brand": "Brand 4",
                "details": {
                  "model": "Model 4",
                  "specs": {
                    "price": 320,
                    "features": {
                      "dimension": "10 inches",
                      "weight": "1 kg",
                      "extras": {
                        "warranty": "1 year",
                        "color": "Silver"
                      }
                    }
                  }
                }
              }
            ]
          }
        ],
        "totalPrice": 850
      },
      {
        "orderId": "ORD9210",
        "orderDate": "2023-09-16",
        "products": [
          {
            "category": "Clothing",
            "subCategory": "Subcategory 1",
            "items": [
              {
                "name": "Product 1",
                "brand": "Brand 1",
                "details": {
                  "model": "Model 1",
                  "specs": {
                    "price": 634,
                    "features": {
                      "dimension": "15 inches",
                      "weight": "5 kg",
                      "extras": {
                        "warranty": "1 year",
                        "color": "Black"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "category": "Footwear",
            "subCategory": "Subcategory 2",
            "items": [
              {
                "name": "Product 2",
                "brand": "Brand 2",
                "details": {
                  "model": "Model 2",
                  "specs": {
                    "price": 460,
                    "features": {
                      "dimension": "12 inches",
                      "weight": "1 kg",
                      "extras": {
                        "warranty": "1 year",
                        "color": "Silver"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "category": "Books",
            "subCategory": "Subcategory 3",
            "items": [
              {
                "name": "Product 3",
                "brand": "Brand 3",
                "details": {
                  "model": "Model 3",
                  "specs": {
                    "price": 624,
                    "features": {
                      "dimension": "5 inches",
                      "weight": "5 kg",
                      "extras": {
                        "warranty": "1 year",
                        "color": "Silver"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "category": "Clothing",
            "subCategory": "Subcategory 4",
            "items": [
              {
                "name": "Product 4",
                "brand": "Brand 4",
                "details": {
                  "model": "Model 4",
                  "specs": {
                    "price": 742,
                    "features": {
                      "dimension": "13 inches",
                      "weight": "3 kg",
                      "extras": {
                        "warranty": "1 year",
                        "color": "Black"
                      }
                    }
                  }
                }
              }
            ]
          }
        ],
        "totalPrice": 1521
      }
    ]
  },
  {
    "customerID": "CUST0028",
    "personalInfo": {
      "name": {
        "firstName": "Prady_28",
        "lastName": "Mohta_28"
      },
      "contact": {
        "email": "prady28@example.com",
        "phone": "700-555-5418",
        "address": {
          "street": "140 Guliford Road",
          "city": "Rock Ville",
          "state": "MD",
          "zipCode": "22360",
          "country": "USA",
          "deliveryDetails": {
            "instructions": "Leave at front door",
            "timePreferences": {
              "weekdays": "Afternoon",
              "weekends": "Morning",
              "specialInstructions": {
                "ifNotHome": "Leave with neighbor",
                "neighborDetails": {
                  "name": "Manav Gupta",
                  "contactNumber": "333-444-5555",
                  "address": "4321 Hartwick Road"
                }
              }
            }
          }
        }
      }
    },
    "viewedProducts": [
      {
        "category": "Home Appliances",
        "subCategory": "Subcategory 1",
        "items": [
          {
            "name": "Product 1",
            "brand": "Brand 1",
            "details": {
              "model": "Model 1",
              "specs": {
                "price": 782,
                "features": {
                  "dimension": "12 inches",
                  "weight": "4 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "White"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "category": "Clothing",
        "subCategory": "Subcategory 2",
        "items": [
          {
            "name": "Product 2",
            "brand": "Brand 2",
            "details": {
              "model": "Model 2",
              "specs": {
                "price": 342,
                "features": {
                  "dimension": "14 inches",
                  "weight": "4 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "White"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "category": "Clothing",
        "subCategory": "Subcategory 3",
        "items": [
          {
            "name": "Product 3",
            "brand": "Brand 3",
            "details": {
              "model": "Model 3",
              "specs": {
                "price": 144,
                "features": {
                  "dimension": "6 inches",
                  "weight": "3 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "White"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "category": "Books",
        "subCategory": "Subcategory 4",
        "items": [
          {
            "name": "Product 4",
            "brand": "Brand 4",
            "details": {
              "model": "Model 4",
              "specs": {
                "price": 388,
                "features": {
                  "dimension": "7 inches",
                  "weight": "1 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "Silver"
                  }
                }
              }
            }
          }
        ]
      }
    ],
    "wishlist": [
      {
        "category": "Home Appliances",
        "subCategory": "Subcategory 1",
        "items": [
          {
            "name": "Product 1",
            "brand": "Brand 1",
            "details": {
              "model": "Model 1",
              "specs": {
                "price": 143,
                "features": {
                  "dimension": "14 inches",
                  "weight": "3 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "White"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "category": "Electronics",
        "subCategory": "Subcategory 2",
        "items": [
          {
            "name": "Product 2",
            "brand": "Brand 2",
            "details": {
              "model": "Model 2",
              "specs": {
                "price": 940,
                "features": {
                  "dimension": "13 inches",
                  "weight": "2 kg",
                  "extras": {
                    "warranty": "1 year",
                    "color": "White"
                  }
                }
              }
            }
          }
        ]
      }
    ],
    "cart": {
      "items": [
        {
          "category": "Clothing",
          "subCategory": "Subcategory 1",
          "items": [
            {
              "name": "Product 1",
              "brand": "Brand 1",
              "details": {
                "model": "Model 1",
                "specs": {
                  "price": 534,
                  "features": {
                    "dimension": "12 inches",
                    "weight": "5 kg",
                    "extras": {
                      "warranty": "1 year",
                      "color": "White"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "category": "Electronics",
          "subCategory": "Subcategory 2",
          "items": [
            {
              "name": "Product 2",
              "brand": "Brand 2",
              "details": {
                "model": "Model 2",
                "specs": {
                  "price": 103,
                  "features": {
                    "dimension": "14 inches",
                    "weight": "3 kg",
                    "extras": {
                      "warranty": "1 year",
                      "color": "Silver"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "category": "Electronics",
          "subCategory": "Subcategory 3",
          "items": [
            {
              "name": "Product 3",
              "brand": "Brand 3",
              "details": {
                "model": "Model 3",
                "specs": {
                  "price": 466,
                  "features": {
                    "dimension": "6 inches",
                    "weight": "5 kg",
                    "extras": {
                      "warranty": "1 year",
                      "color": "Silver"
                    }
                  }
                }
              }
            }
          ]
        }
      ]
    },
    "orderHistory": [
      {
        "orderId": "ORD9232",
        "orderDate": "2023-03-09",
        "products": [
          {
            "category": "Home Appliances",
            "subCategory": "Subcategory 1",
            "items": [
              {
                "name": "Product 1",
                "brand": "Brand 1",
                "details": {
                  "model": "Model 1",
                  "specs": {
                    "price": 43,
                    "features": {
                      "dimension": "14 inches",
                      "weight": "1 kg",
                      "extras": {
                        "warranty": "1 year",
                        "color": "White"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "category": "Clothing",
            "subCategory": "Subcategory 2",
            "items": [
              {
                "name": "Product 2",
                "brand": "Brand 2",
                "details": {
                  "model": "Model 2",
                  "specs": {
                    "price": 850,
                    "features": {
                      "dimension": "6 inches",
                      "weight": "5 kg",
                      "extras": {
                        "warranty": "1 year",
                        "color": "Black"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "category": "Home Appliances",
            "subCategory": "Subcategory 3",
            "items": [
              {
                "name": "Product 3",
                "brand": "Brand 3",
                "details": {
                  "model": "Model 3",
                  "specs": {
                    "price": 430,
                    "features": {
                      "dimension": "5 inches",
                      "weight": "4 kg",
                      "extras": {
                        "warranty": "1 year",
                        "color": "Silver"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "category": "Electronics",
            "subCategory": "Subcategory 4",
            "items": [
              {
                "name": "Product 4",
                "brand": "Brand 4",
                "details": {
                  "model": "Model 4",
                  "specs": {
                    "price": 612,
                    "features": {
                      "dimension": "12 inches",
                      "weight": "4 kg",
                      "extras": {
                        "warranty": "1 year",
                        "color": "Silver"
                      }
                    }
                  }
                }
              }
            ]
          }
        ],
        "totalPrice": 706
      }
    ]
  }
]);
print("✅ InsertMany completed.");

// ---------- iii) Delete one ----------
print("\n[Query iii] Delete a customer who viewed Electronics, wishlist Books, and order > 1000");
db.ecommerce.deleteOne({
  "viewedProducts.category": "Electronics",
  "wishlist.category": "Books",
  "orderHistory.totalPrice": { $gt: 1000 }
});
print("✅ DeleteOne executed.");

// ---------- iv) Delete many ----------
print("\n[Query iv] Delete customers in MD with orders < 1000");
db.ecommerce.deleteMany({
  "personalInfo.contact.address.state": "MD",
  "orderHistory.totalPrice": { $lt: 1000 }
});
print("✅ DeleteMany executed.");

// ---------- v) Update ----------
print("\n[Query v] Update email & wishlist priority for viewed Books + cart > $100");
db.ecommerce.updateMany({
  "viewedProducts.category": "Books",
  "cart.items.items.details.specs.price": { $gt: 100 }
}, {
  $set: {
    "personalInfo.contact.email": "updated_to_new@example.com",
    "wishlist.0.priority": "High"
  }
});
print("✅ UpdateMany executed.");

// ---------- vi) Find ----------
print("\n[Query vi] Customers with cart items > $100 and viewed Electronics:");
db.ecommerce.find({
  "cart.items.items.details.specs.price": { $gt: 100 },
  "viewedProducts.category": "Electronics"
}, { customerID: 1, _id: 0 }).forEach(printjson);

// ---------- vii) Find ----------
print("\n[Query vii] Customers from MD who viewed both Electronics and Books:");
db.ecommerce.find({
  "personalInfo.contact.address.state": "MD",
  "viewedProducts.category": { $all: ["Electronics", "Books"] }
}, { customerID: 1, _id: 0 }).forEach(printjson);

// ---------- viii) Find ----------
print("\n[Query viii] Customers with Footwear in wishlist and viewed Home Appliances:");
db.ecommerce.find({
  "wishlist.category": "Footwear",
  "viewedProducts.category": "Home Appliances"
}, { customerID: 1, _id: 0 }).forEach(printjson);

// ---------- ix) Find ----------
print("\n[Query ix] Customers with orders > $1500 and live in College Park:");
db.ecommerce.find({
  "orderHistory.totalPrice": { $gt: 1500 },
  "personalInfo.contact.address.city": "College Park"
}, { customerID: 1, _id: 0 }).forEach(printjson);

// ---------- x) Find ----------
print("\n[Query x] Customers who viewed & cart both contain Electronics:");
db.ecommerce.find({
  "viewedProducts.category": "Electronics",
  "cart.items.category": "Electronics"
}, { customerID: 1, _id: 0 }).forEach(printjson);

// ---------- xi) Find ----------
print("\n[Query xi] Customers who viewed Clothing, wishlist Books, live in Hyattsville:");
db.ecommerce.find({
  "viewedProducts.category": "Clothing",
  "wishlist.category": "Books",
  "personalInfo.contact.address.city": "Hyattsville"
}, { customerID: 1, _id: 0 }).forEach(printjson);

// ---------- xii) Find ----------
print("\n[Query xii] Customers with 2023 orders, warranty items, Home Appliances cart:");
db.ecommerce.find({
  "orderHistory.orderDate": { $regex: /^2023/ },
  "orderHistory.products.items.details.specs.features.extras.warranty": { $exists: true },
  "cart.items.category": "Home Appliances"
}, { customerID: 1, _id: 0 }).forEach(printjson);

// ---------- xiii) Find ----------
print("\n[Query xiii] Customers in VA, viewed Electronics, cart < $200:");
db.ecommerce.find({
  "personalInfo.contact.address.state": "VA",
  "viewedProducts.category": "Electronics",
  "cart.items.items.details.specs.price": { $lt: 200 }
}, { customerID: 1, _id: 0 }).forEach(printjson);

print("\n===============================");
print(" All Queries Executed Successfully ");
print("===============================\n");
