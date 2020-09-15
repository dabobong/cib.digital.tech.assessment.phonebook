using cib.digital.tech.assessment.phonebook.Controllers.Service.Context;
using cib.digital.tech.assessment.phonebook.Controllers.Service.Model;
using cib.digital.tech.assessment.phonebook.Controllers.Service.Repository.Interface;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cib.digital.tech.assessment.phonebook.Controllers.Service.Repository
{
    public class PhoneBookRepository : IPhoneBookRepository
    {
        private readonly IServiceScope _service;
        private readonly PhonebookDatabaseContext _databaseContext;

        public PhoneBookRepository(IServiceProvider services)
        {
            _service = services.CreateScope();
            _databaseContext = _service.ServiceProvider.GetRequiredService<PhonebookDatabaseContext>();
        }

        public async Task<bool> Create(PhoneBook phoneBook)
        {
            _databaseContext.PhoneBooks.Add(phoneBook);
            var results = await _databaseContext.SaveChangesAsync();
            return results == 1;
        }

        public IOrderedQueryable<PhoneBook> GetAll() => _databaseContext.PhoneBooks.OrderBy(x => x.Name);
    }
}
