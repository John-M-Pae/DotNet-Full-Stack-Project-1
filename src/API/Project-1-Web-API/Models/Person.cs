﻿namespace Project_1_Web_API.Models
{
    public class Person
    {
        public int PersonId { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Email { get; set; }
        public int Age { get; set; }
        public string? Job { get; set; }

        // Navigation
        //public virtual ICollection<Flight> Flights { get; set; }
    }
}
