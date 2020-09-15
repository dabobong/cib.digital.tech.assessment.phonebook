using cib.digital.tech.assessment.phonebook.Controllers.Service.Model;
using cib.digital.tech.assessment.phonebook.Controllers.Service.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cib.digital.tech.assessment.phonebook.Controllers.Service.Services
{
    public class PhoneBookServices : IPhoneBookServices
    {
        private readonly IPhoneBookRepository _phoneBookRepository;

        public PhoneBookServices(IPhoneBookRepository phoneBookRepository)
        {
            _phoneBookRepository = phoneBookRepository;
        }
        public async Task<bool> Create(PhoneBook phoneBook)
        {
            return await _phoneBookRepository.Create(phoneBook);
        }

        public IOrderedQueryable<PhoneBook> GetAll() => _phoneBookRepository.GetAll();
    }
}
