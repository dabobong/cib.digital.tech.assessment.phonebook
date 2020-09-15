using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cib.digital.tech.assessment.phonebook.Controllers.Service.Model;
using Microsoft.EntityFrameworkCore;

namespace cib.digital.tech.assessment.phonebook.Controllers.Service.Context
{
    public class PhonebookDatabaseContext : DbContext
    {
        public PhonebookDatabaseContext(DbContextOptions<PhonebookDatabaseContext> dbContextOptions)
            : base(dbContextOptions) { }

        public DbSet<PhoneBook> PhoneBooks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PhoneBook>().HasKey(x => x.Id);
        }
    }
}
